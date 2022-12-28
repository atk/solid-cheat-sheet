import solid from "solid-start/vite";
import { defineConfig } from "vite";
import solidStatic from "solid-start-static";
import solidMdx from "solid-start-mdx";
import { default as remarkTwoslash } from "remark-shiki-twoslash";
import mdx from "@mdx-js/rollup";
import { nodeTypes } from "@mdx-js/mdx";

export default defineConfig({
  base: "./",
  build: {
    minify: false
  },
  plugins: [
    solidMdx({ themes: ["default"] }),
    solid({
      adapter: solidStatic(),
      ssr: true,
      extensions: [".mdx", ".md"]     
    }),
  ]
});
