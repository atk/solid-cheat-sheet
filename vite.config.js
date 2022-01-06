import { defineConfig } from "vite";
import solid from "solid-start";
import startStatic from 'solid-start-static';

export default defineConfig({
  plugins: [solid({ adapter: startStatic(), prerenderRoutes: ['/'] })],
});
