// @refresh reload
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <MetaProvider>
      <Router
        base={process.env.BASE_PATH}
        root={(props) => (<Suspense>{props.children}</Suspense>)}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
