module.exports = {
  extends: ['airbnb-base', 'plugin:import/errors'],
  plugins: ['mocha'],
  env: {
    browser: true,
    mocha: true
  },
  rules: {
    'func-names': 0,
    'id-length': [1, {'exceptions': ['$']}],
    'new-cap': [2, {'capIsNewExceptions': ['Deferred']}],
    'max-len': 0,
    'no-prototype-builtins': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'no-useless-escape': 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'consistent-return': 0,
    'array-callback-return': 0,
    'mocha/no-exclusive-tests': 2,
    'mocha/no-skipped-tests': 2,
    'mocha/no-pending-tests': 2,
    'mocha/handle-done-callback': 2,
    'mocha/no-global-tests': 2,
    'mocha/no-return-and-callback': 2,
    'mocha/no-sibling-hooks': 2,
    'mocha/no-identical-title': 2,
    'mocha/no-top-level-hooks': 2
  },
  globals: {
    fixture: true,
    chrome: true,
  }
}
