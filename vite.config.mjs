import { defineConfig } from "vite";
import solid from "solid-start";
import solidStatic from "solid-start-static";

export default defineConfig({
  plugins: [solid({ adapter: solidStatic() })]
});
