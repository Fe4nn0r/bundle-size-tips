import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorBoundary, { ErrorLayout } from "components/error-boundary/index";
import Home from "pages/home";
import Layout from "components/layout";

const Page1 = lazy(() => /* webpackChunkName: "Page1" */ import("pages/page1"));
const Page2 = lazy(() => /* webpackChunkName: "Page2" */ import("pages/page2"));
const MomentPage = lazy(
  () => /* webpackChunkName: "MomentPage" */ import("pages/moment")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/moment",
    element: <MomentPage />,
  },
]);

export default function App() {
  return (
    <React.StrictMode>
      <ErrorBoundary fallback={<ErrorLayout />}>
        <Layout>
          <Suspense fallback="Loading...">
            <RouterProvider router={router} />
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
