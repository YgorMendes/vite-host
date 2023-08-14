import React from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// views
import { HomeView, LoginView } from "../views";

// utils
import { ErrorBoundary } from "../utils";

// pages
const ProductA = React.lazy(() => import("product_a/App"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route path="/home" element={<HomeView />} />
      <Route
        path="/product-a/*"
        element={
          <Suspense fallback={"loading..."}>
            <ErrorBoundary>
              <ProductA />
            </ErrorBoundary>
          </Suspense>
        }
      />
    </Routes>
  );
};

export { AppRoutes };
