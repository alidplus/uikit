/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      include: ['lib/', 'lib/main.ts'],
      exclude: [
        'lib/**/stories.tsx',
        'lib/**/stories.ts',
        'lib/**/*.mdx',
        'lib/charts/samples/**/*',
      ],
      outDir: 'dist',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
  build: {
    sourcemap: true,
    copyPublicDir: false,
    lib: {
      entry: {
        alert: path.resolve(__dirname, 'lib/alert/component.tsx'),
        avatar: path.resolve(__dirname, 'lib/avatar/component.tsx'),
        badge: path.resolve(__dirname, 'lib/badge/component.tsx'),
        breadcrumb: path.resolve(__dirname, 'lib/breadcrumb/component.tsx'),
        buttons: path.resolve(__dirname, 'lib/buttons/component.tsx'),
        card: path.resolve(__dirname, 'lib/card/component.tsx'),
        checkbox: path.resolve(__dirname, 'lib/checkbox/component.tsx'),
        container: path.resolve(__dirname, 'lib/container/component.tsx'),
        drawer: path.resolve(__dirname, 'lib/drawer/component.tsx'),
        dropdown: path.resolve(__dirname, 'lib/dropdown/component.tsx'),
        empty: path.resolve(__dirname, 'lib/empty/component.tsx'),
        faq: path.resolve(__dirname, 'lib/faq/component.tsx'),
        'faq-alert': path.resolve(__dirname, 'lib/faq-alert/component.tsx'),
        filter: path.resolve(__dirname, 'lib/filter/component.tsx'),
        input: path.resolve(__dirname, 'lib/input/component.tsx'),
        layout: path.resolve(__dirname, 'lib/layout/component.tsx'),
        modal: path.resolve(__dirname, 'lib/modal/component.tsx'),
        navbar: path.resolve(__dirname, 'lib/navbar/component.tsx'),
        pagination: path.resolve(__dirname, 'lib/pagination/component.tsx'),
        paper: path.resolve(__dirname, 'lib/paper/component.tsx'),
        popover: path.resolve(__dirname, 'lib/popover/component.tsx'),
        pressible: path.resolve(__dirname, 'lib/pressible/component.tsx'),
        radio: path.resolve(__dirname, 'lib/radio/component.tsx'),
        select: path.resolve(__dirname, 'lib/select/component.tsx'),
        spinner: path.resolve(__dirname, 'lib/spinner/component.tsx'),
        switch: path.resolve(__dirname, 'lib/switch/component.tsx'),
        'tab-switch': path.resolve(__dirname, 'lib/tab-switch/component.tsx'),
        tabbar: path.resolve(__dirname, 'lib/tabbar/component.tsx'),
        table: path.resolve(__dirname, 'lib/table/component.tsx'),
        tabs: path.resolve(__dirname, 'lib/tabs/component.tsx'),
        tag: path.resolve(__dirname, 'lib/tag/component.tsx'),
        textarea: path.resolve(__dirname, 'lib/textarea/component.tsx'),
        tooltip: path.resolve(__dirname, 'lib/tooltip/component.tsx'),
        'user-card': path.resolve(__dirname, 'lib/user-card/component.tsx'),

        icons: path.resolve(__dirname, 'lib/icons/index.ts'),
        main: path.resolve(__dirname, 'lib/main.ts'),
      },
      // the proper extensions will be added
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'react',
        'react-dom',
        'recharts',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'class-variance-authority',
        'classnames',
        '@solar-icons/react',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
