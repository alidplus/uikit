/* eslint-disable no-undef */
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const tokensDir = join(rootDir, 'tokens');
const srcDir = join(rootDir, 'lib');

// Ensure src directory exists
try {
  readdirSync(srcDir);
} catch {
  mkdirSync(srcDir, { recursive: true });
}

// Function to convert key to kebab-case and handle special characters
function toKebabCase(str) {
  return str
    .replace(/\$/g, '')
    .replace(/&/g, 'n') // Replace & with n (must be first)
    .replace(/[()]/g, '') // Remove parentheses
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Add hyphen before capital letters
    .toLowerCase();
}

// Function to build a path map from JSON structure (e.g., "color/gray/50" -> variable name)
function buildPathMap(obj, pathPrefix = '', varPrefix = '', map = {}) {
  for (const [key, value] of Object.entries(obj)) {
    if (key === '$extensions' || key === '$type') {
      continue; // Skip metadata
    }

    const kebabKey = toKebabCase(key);
    const fullPath = pathPrefix ? `${pathPrefix}/${kebabKey}` : kebabKey;
    const fullVarName = varPrefix ? `${varPrefix}-${kebabKey}` : kebabKey;

    if (value && typeof value === 'object' && value.$value) {
      // This is a leaf value
      map[fullPath] = fullVarName;
    } else if (value && typeof value === 'object' && !value.$value) {
      // This is a nested object, recurse
      buildPathMap(value, fullPath, fullVarName, map);
    }
  }
  return map;
}

// Function to generate SCSS variables from nested object (for primitives)
function generateScssVariables(obj, prefix = '') {
  const variables = [];

  for (const [key, value] of Object.entries(obj)) {
    if (key === '$extensions' || key === '$type') {
      continue; // Skip metadata
    }

    const kebabKey = toKebabCase(key);
    const fullKey = prefix ? `${prefix}-${kebabKey}` : kebabKey;

    if (value && typeof value === 'object' && value.$value) {
      // Extract value based on type
      let scssValue;
      if (value.$value.hex) {
        scssValue = value.$value.hex; // Color
      } else if (typeof value.$value === 'number') {
        scssValue = value.$value; // Number (spacing, radius, etc.)
      } else {
        scssValue = value.$value; // Other types
      }
      variables.push(`$${fullKey}: ${scssValue};`);
    } else if (value && typeof value === 'object' && !value.$value) {
      // This is a nested object, recurse
      variables.push(...generateScssVariables(value, fullKey));
    }
  }

  return variables;
}

// Function to convert targetVariableName to SCSS variable path
// "color/gray/50" -> "color/gray/50"
// "color/primary/400(Brand)" -> "color/primary/400brand"
function normalizeTargetPath(targetName) {
  return targetName
    .split('/')
    .map(part => toKebabCase(part))
    .join('/');
}

// Function to find which primitive file contains a given path
function findPrimitiveFile(path, primitiveMaps) {
  for (const [fileName, pathMap] of Object.entries(primitiveMaps)) {
    if (pathMap[path]) {
      return fileName;
    }
  }
  return null;
}

// STEP 1: Process all primitives files
console.log('📦 Step 1: Processing primitives files...\n');

const primitiveMaps = {}; // Store path maps for each primitive file
const allFiles = readdirSync(tokensDir);
const primitivesFiles = allFiles.filter(f => f.endsWith('.primitives.json'));

for (const file of primitivesFiles) {
  const filePath = join(tokensDir, file);
  const jsonData = JSON.parse(readFileSync(filePath, 'utf-8'));
  
  // Build path map for this primitive file
  const pathMap = {};
  for (const [topKey, topValue] of Object.entries(jsonData)) {
    if (topKey.startsWith('$')) continue;
    const kebabTopKey = toKebabCase(topKey);
    Object.assign(pathMap, buildPathMap(topValue, topKey, kebabTopKey, {}));
  }
  
  const baseName = basename(file, '.primitives.json').toLowerCase();
  primitiveMaps[baseName] = pathMap;
  
  // Generate SCSS variables
  const scssVariables = [];
  for (const [topKey, topValue] of Object.entries(jsonData)) {
    if (topKey.startsWith('$')) continue;
    const kebabTopKey = toKebabCase(topKey);
    scssVariables.push(...generateScssVariables(topValue, kebabTopKey));
  }
  
  const scssContent = scssVariables.join('\n') + '\n';
  const outputPath = join(srcDir, `${baseName}.primitives.scss`);
  writeFileSync(outputPath, scssContent, 'utf-8');
  
  console.log(`  ✅ ${file} -> ${baseName}.primitives.scss (${scssVariables.length} variables)`);
}

console.log(`\n✅ Step 1 complete: Generated ${primitivesFiles.length} primitives files\n`);

// STEP 2: Process all tokens files
console.log('🎨 Step 2: Processing tokens files...\n');

const tokensFiles = allFiles.filter(f => f.endsWith('.tokens.json'));

for (const file of tokensFiles) {
  const filePath = join(tokensDir, file);
  const jsonData = JSON.parse(readFileSync(filePath, 'utf-8'));
  
  const baseName = basename(file, '.tokens.json').toLowerCase();
  const imports = new Set();
  const scssVariables = [];
  
  // Function to process tokens recursively
  function processTokens(obj, prefix = '') {
    for (const [key, value] of Object.entries(obj)) {
      if (key === '$extensions' || key === '$type') {
        continue;
      }
      
      const kebabKey = toKebabCase(key);
      const fullKey = prefix ? `${prefix}-${kebabKey}` : kebabKey;
      
      if (value && typeof value === 'object' && value.$value) {
        // Check if this token references a primitive
        const aliasData = value.$extensions?.aliasData || value.$extensions?.['com.figma.aliasData'];
        const targetVarName = aliasData?.targetVariableName;
        
        if (targetVarName) {
          // Normalize the target path
          const normalizedPath = normalizeTargetPath(targetVarName);
          
          // Find which primitive file contains this variable
          const primitiveFile = findPrimitiveFile(normalizedPath, primitiveMaps);
          
          if (primitiveFile) {
            // Get the variable name from the path map
            const varName = primitiveMaps[primitiveFile][normalizedPath];
            if (varName) {
              imports.add(primitiveFile);
              scssVariables.push(`$${fullKey}: $${varName};`);
              continue;
            }
          }
        }
        
        // Fallback: use the actual value if no reference found
        let scssValue;
        if (value.$value.hex) {
          scssValue = value.$value.hex;
        } else if (typeof value.$value === 'number') {
          scssValue = value.$value;
        } else {
          scssValue = value.$value;
        }
        scssVariables.push(`$${fullKey}: ${scssValue};`);
      } else if (value && typeof value === 'object' && !value.$value) {
        // Nested object, recurse
        processTokens(value, fullKey);
      }
    }
  }
  
  // Process all top-level keys
  for (const [topKey, topValue] of Object.entries(jsonData)) {
    if (topKey.startsWith('$')) continue;
    processTokens(topValue, topKey);
  }
  
  // Build SCSS content with imports
  const importLines = Array.from(imports)
    .sort()
    .map(primFile => `@import './${primFile}.primitives.scss';`);
  
  const scssContent = importLines.length > 0 
    ? importLines.join('\n') + '\n\n' + scssVariables.join('\n') + '\n'
    : scssVariables.join('\n') + '\n';
  
  const outputPath = join(srcDir, `${baseName}.tokens.scss`);
  writeFileSync(outputPath, scssContent, 'utf-8');
  
  console.log(`  ✅ ${file} -> ${baseName}.tokens.scss (${scssVariables.length} variables, ${imports.size} imports)`);
}

console.log(`\n✅ Step 2 complete: Generated ${tokensFiles.length} tokens files\n`);
console.log(`🎉 All done! Generated files in ${srcDir}`);
