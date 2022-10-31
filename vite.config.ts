import solid from "solid-start/vite";
import { defineConfig } from "vite";
import solidStatic from "solid-start-static";
import rehypeRaw from "rehype-raw";
import { default as remarkTwoslash } from "remark-shiki-twoslash";
import mdx from "@mdx-js/rollup";
import { nodeTypes } from "@mdx-js/mdx";

export default defineConfig({
  base: "./",
  plugins: [
    {
      ...mdx({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        rehypePlugins: [[rehypeRaw, { passThrough: nodeTypes }]],
        remarkPlugins: [
          [(remarkTwoslash as typeof remarkTwoslash & { default: typeof remarkTwoslash }).default, {
            disableImplicitReactImport: true,
            includeJSDocInHover: true,
            // theme: "css-variables",
            theme: "github-light",
            // themes: ["github-light", "github-dark"],
            defaultOptions: {
              lib: ["dom", "es2015"],
            },
            defaultCompilerOptions: {
              allowSyntheticDefaultImports: true,
              esModuleInterop: true,
              target: "ESNext",
              module: "ESNext",
              lib: ["dom", "es2015"],
              jsxImportSource: "solid-js",
              jsx: "preserve",
              types: ["vite/client"],
              paths: {
                "~/*": ["./src/*"],
              },
            },
          }]
        ]
      }),
      enforce: "pre",
    } as any,
    solid({
      adapter: solidStatic(),
      extensions: [".mdx", ".md"],
      ssr: true,
      hydrationEvents: ["mousemove", "touchstart", "touchmove"]
    }),
  ],
});
