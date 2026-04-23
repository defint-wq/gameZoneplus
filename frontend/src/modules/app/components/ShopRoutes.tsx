import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const ShopIndexPage = lazy(() =>
  import("../../../pages/shop").then((module) => ({
    default: module.ShopPage,
  })),
);

export const ShopRoutes = () => {
  return (
    <Suspense fallback={<div>Loading Shop...</div>}>
      <Routes>
        <Route path="/" element={<ShopIndexPage />} />
      </Routes>
    </Suspense>
  );
};
