// .eslintrc.js
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: ['@rushstack/eslint-config/profile/web-app', '@rushstack/eslint-config/mixins/react'],
  rules: {
    'no-console': 'warn',
    semi: ['error', 'always'],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@rushstack/typedef-var': 'off', // 타입 추론을 허용하도록 규칙 비활성화
  },
};
