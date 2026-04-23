import { lazy, Suspense } from "react";

const ShopIndexPage = lazy(() =>
  import("../../../pages/shop").then((module) => ({
    default: module.ShopPage,
  })),
);

export const ShopRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopIndexPage />
    </Suspense>
  );
};
