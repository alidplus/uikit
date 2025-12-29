/* eslint-disable no-undef */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Read lib/main.ts
const mainTsPath = join(rootDir, 'lib/main.ts');
const mainTsContent = readFileSync(mainTsPath, 'utf-8');

// Parse export statements
const exportRegex = /export\s+\*\s+from\s+['"](\.\/[^'"]+)['"]/g;
const exports = [];
let match;

while ((match = exportRegex.exec(mainTsContent)) !== null) {
  const exportPath = match[1];
  // Skip commented exports and icons
  if (!exportPath.includes('icons')) {
    exports.push(exportPath);
  }
}

// Extract component names from export paths
// e.g., './alert/component' -> 'alert', './faq-alert/component' -> 'faq-alert'
const componentNames = exports
  .map((exportPath) => {
    // Remove './' prefix and '/component' suffix
    const name = exportPath.replace(/^\.\//, '').replace(/\/component$/, '');
    return name;
  })
  .sort();

console.log(`📦 Found ${componentNames.length} components in lib/main.ts`);
console.log(`   Components: ${componentNames.join(', ')}\n`);

// Read vite.config.ts
const viteConfigPath = join(rootDir, 'vite.config.ts');
let viteConfigContent = readFileSync(viteConfigPath, 'utf-8');

// Generate entry points for vite.config.ts
const entryLines = componentNames
  .map((name) => {
    // Determine if it needs quotes (for kebab-case)
    const key = name.includes('-') ? `'${name}'` : name;
    const filePath = `path.resolve(__dirname, 'lib/${name}/component.tsx')`;
    return `        ${key}: ${filePath},`;
  })
  .join('\n');

// Add icons and main entries
const iconsEntry = `        icons: path.resolve(__dirname, 'lib/icons/index.ts'),`;
const mainEntry = `        main: path.resolve(__dirname, 'lib/main.ts'),`;

// Replace the entry section in vite.config.ts
const entryStartMarker = '      entry: {';
const entryEndMarker = '      },';
const entryStartIndex = viteConfigContent.indexOf(entryStartMarker);
const entryEndIndex = viteConfigContent.indexOf(entryEndMarker, entryStartIndex);

if (entryStartIndex === -1 || entryEndIndex === -1) {
  throw new Error('Could not find entry section in vite.config.ts');
}

const beforeEntry = viteConfigContent.substring(0, entryStartIndex + entryStartMarker.length);
const afterEntry = viteConfigContent.substring(entryEndIndex);

viteConfigContent = `${beforeEntry}\n${entryLines}\n\n${iconsEntry}\n${mainEntry}\n${afterEntry}`;

writeFileSync(viteConfigPath, viteConfigContent, 'utf-8');
console.log('✅ Updated vite.config.ts\n');

// Read package.json
const packageJsonPath = join(rootDir, 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

// Generate exports for package.json
const exportsObj = {
  '.': {
    types: './dist/main.d.ts',
    import: './dist/main.js',
    default: './dist/main.js',
  },
  './icons': {
    types: './dist/icons/index.d.ts',
    import: './dist/icons.js',
    default: './dist/icons.js',
  },
};

// Add component exports
componentNames.forEach((name) => {
  exportsObj[`./${name}`] = {
    types: `./dist/${name}/component.d.ts`,
    import: `./dist/${name}.js`,
    default: `./dist/${name}.js`,
  };
});

// Preserve style.css export
exportsObj['./style.css'] = './dist/uikit.css';

packageJson.exports = exportsObj;

// Write package.json with proper formatting
writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n', 'utf-8');
console.log('✅ Updated package.json\n');

console.log('🎉 All done! Configuration files have been synchronized.');

