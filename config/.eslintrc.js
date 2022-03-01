module.exports = {
  "env": {
    "browser": true,
    "es2020": true
  },
  "parserOptions": {
    "ecmaVersion": 2020
  },
  "extends": "airbnb-base",
  "rules": {
    "space-before-function-paren": "off",
    "import/extensions": "off",
    "object-shorthand": "off",
    "keyword-spacing": "off",
    "import/no-unresolved": "off",
    "no-case-declarations": "off",
    "prefer-destructuring": "off",
    "no-unused-expressions": ["error", {"allowTernary": true}],
    "func-names": "off",
    "import/no-import-module-exports": "off",
    "no-console": "off"
  }
}
