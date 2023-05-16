import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorBoundary, { ErrorLayout } from "components/error-boundary/index";
import Home from "pages/home";
import Layout from "components/layout";
import Page1 from "pages/page1";
import Page2 from "pages/page2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  ,
  {
    path: "/page2",
    element: <Page2 />,
  },
]);

export default function App() {
  return (
    <React.StrictMode>
      <ErrorBoundary fallback={<ErrorLayout />}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
