module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:jsdoc/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
  },
  plugins: ['jest', 'jsdoc'],
  rules: {
    camelcase: 'off',
    'comma-dangle': 'off',
    'generator-star-spacing': 'off',
    'max-len': 'off',
    'operator-linebreak': 'off',
    'jsdoc/require-param-description': 'off',
  },
};
