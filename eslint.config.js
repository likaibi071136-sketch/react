import eslint from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintPrettier from 'eslint-plugin-prettier'
import importSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

const ignores = [
    'dist',
    'build',
    'node_modules',
    'eslint.config.js',
    'commitlint.config.js',
    '**/.next/**',
    '**/out/**',
    '**/build/**',
    '**/next-env.d.ts'
]

const workflowConfig = {
    files: ['apps/workflow/**/*.{ts,tsx}'],
    languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser
    },
    plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh
    },
    rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'react-hooks/incompatible-library': ['warn', { libraryName: 'react' }],
        'react-hooks/static-components': ['warn', { libraryName: 'react' }],
        'no-console': 'error'
    }
}

const apiServerConfig = {
    files: ['apps/api-server/**/*.ts'],
    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.jest
        },
        parser: tseslint.parser
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-console': 'error'
    }
}

const packagesConfig = {
    files: ['packages/**/*.{ts,tsx}'],
    languageOptions: {
        globals: globals.node
    },
    rules: {
        'no-console': 'error'
    }
}

export default tseslint.config(
    {
        ignores
    },
    {
        extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
        plugins: {
            prettier: eslintPrettier,
            'simple-import-sort': importSort
        },
        rules: {
            'prettier/prettier': 'error',
            'simple-import-sort/imports': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off'
        }
    },
    workflowConfig,
    apiServerConfig,
    packagesConfig
)
