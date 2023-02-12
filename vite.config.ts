import solid from "solid-start/vite";
import { defineConfig } from "vite";
import solidStatic from "solid-start-static";
import solidMdx from "solid-start-mdx";
import { default as remarkTwoslash } from "remark-shiki-twoslash";
import mdx from "@mdx-js/rollup";
import { nodeTypes } from "@mdx-js/mdx";

console.log('using base path', process.env.BASE_PATH ?? "./");

export default defineConfig({
  base: process.env.BASE_PATH ?? "./",
  plugins: [
    solidMdx({ themes: ["css-variables"] }),
    solid({
      adapter: solidStatic(),
      extensions: [".mdx", ".md"]
    }),
  ]
});
