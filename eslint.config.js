import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from "eslint-config-prettier/flat";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  someConfig,
  eslintConfigPrettier,
]);
