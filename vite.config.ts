import { nodeTypes } from "@mdx-js/mdx";
import { defineConfig } from "@solidjs/start/config";
/* @ts-ignore */
import { default as mdx } from "@vinxi/plugin-mdx";
import rehypeRaw from "rehype-raw";
import { default as shikiTwoslash } from "remark-shiki-twoslash";

const mdxOptions = {
  rehypePlugins: [[rehypeRaw, { passThrough: nodeTypes }]],
  remarkPlugins: [
    [
      shikiTwoslash,
      {
        disableImplicitReactImport: true,
        includeJSDocInHover: true,
        theme: "css-variables",
        defaultCompilerOptions: {
          allowSyntheticDefaultImports: true,
          esModuleInterop: true,
          target: "ESNext",
          module: "ESNext",
          lib: ["lib.dom.d.ts", "lib.es2014.d.ts"],
          jsxImportSource: "solid-js",
          jsx: "preserve",
          types: ["vite/client"],
          paths: {
            "~/*": ["./src/*"],
          },
        },
      },
    ],
  ],
};

export default defineConfig({
  start: {
    ssr: "async",
    extensions: ["mdx", "md"],
    server: {
      baseURL: process.env.BASE_PATH,
      preset: "static"
    },
  },
  plugins: [
    [
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        ...mdxOptions,
      }),
    ],
  ],
});
