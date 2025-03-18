import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import airbnb from 'eslint-config-airbnb'
import airbnbHooks from 'eslint-config-airbnb-hooks'
import airbnbTypescript from 'eslint-config-airbnb-typescript'
import prettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['packages/*/src/**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    { parserOptions: { project: './tsconfig.json' } },
    { rules: { 'react/react-in-jsx-scope': 'off' } },
    { extends: ['plugin:react/recommended'] },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    ...airbnb,
    ...airbnbHooks,
    ...airbnbTypescript,
    ...prettier,
]
