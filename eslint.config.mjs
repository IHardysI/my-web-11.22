// eslint.config.mjs

import js from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import pluginTailwindCSS from 'eslint-plugin-tailwindcss';
import globals from 'globals';

export default [
  // Base configuration
  {
    ignores: ['node_modules'],
  },
  // JavaScript and React configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      import: pluginImport,
      react: pluginReact,
      tailwindcss: pluginTailwindCSS,
    },
    rules: {
      // Base ESLint rules
      ...js.configs.recommended.rules,

      // Import plugin rules
      ...pluginImport.configs.recommended.rules,

      // React plugin rules
      ...pluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Not needed with Next.js

      // Tailwind CSS plugin rules
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-negative-arbitrary-values': 'off',
      'tailwindcss/enforces-shorthand': 'off',
      'tailwindcss/migration-from-tailwind-2': 'off',
      'tailwindcss/no-contradicting-classname': 'error',

      // Your custom rules (if any)
      // ...
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
