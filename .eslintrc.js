module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'next', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-unused-expressions': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'import/no-unresolved': 'off',
  },
}
