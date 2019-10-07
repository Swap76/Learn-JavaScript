module.exports = {
  extends: "standard",
  env: { es6: true },
  rules: {
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "eol-last": ["error", "never"],
    "no-multiple-empty-lines": ["error", { max: 1 }]
  }
};
