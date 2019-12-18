module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  // add your custom rules here
  rules: {
    "nuxt/no-cjs-in-config": "off",
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "eol-last": [2, "always"],
    quotes: [2, "single"],
    "comma-dangle": 0,
    "no-extra-semi": 2,
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    semi: 0,
    "vue/no-v-html": 0,
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "never"
      }
    ]
  }
};
