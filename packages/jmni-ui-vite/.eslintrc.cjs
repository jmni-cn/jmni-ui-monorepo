module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true,
        jest: true
    },
    globals: {
        ga: true,
        chrome: true,
        __DEV__: true
    },
    // 解析 .vue 文件
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:json/recommended',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'prettier',
        'plugin:prettier/recommended',
        '@vue/prettier',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    parserOptions: {
        parser: '@typescript-eslint/parser', // 解析 .ts 文件
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
    }
}