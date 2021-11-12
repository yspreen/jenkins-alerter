module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'class-methods-use-this': [
          'error',
          {
            exceptMethods: [
              // vue lifecycle methods
              'beforeCreate',
              'created',
              'beforeMount',
              'mounted',
              'beforeUpdate',
              'updated',
              'activated',
              'deactivated',
              'beforeDestroy',
              'destroyed',
              'errorCaptured'
            ]
          }
        ]
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-extraneous-dependencies': 'off',
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never'
    }],
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'comma-dangle': [
      'error',
      'never'
    ],
    'func-names': [
      'error',
      'never'
    ],
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'operator-linebreak': [
      'off'
    ],
    'object-curly-newline': [
      'error',
      {
        consistent: true
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'max-len': 'off',
    'import/first': 'off',
    'import/order': 'off',
    'no-plusplus': 'off',
    'compat/compat': 'off'
  }
};
