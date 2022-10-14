// @refresh reload
import { Routes } from "@solidjs/router";
import { Suspense } from "solid-js";
import { ErrorBoundary } from "solid-start/error-boundary";
import {
  Body,
  FileRoutes,
  Head,
  Html,
  Meta,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Solid Cheat Sheet</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <main>
              <Routes>
                <FileRoutes />
              </Routes>
            </main>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
