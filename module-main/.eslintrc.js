module.exports = {
  root: true,
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential',
    '@vue/standard'
  ],
  env: {
    browser: true,
  },
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [4, { 'x-invalid-end-tag': false }],
    'no-undef': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'camelcase': 0 // 0 不强制驼峰命名 1 警告 2 强制
    // "indent": ["error", 4], tab为4个空格
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
