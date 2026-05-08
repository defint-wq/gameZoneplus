import { lazy, Suspense } from "react";

const ArcadeIndexPage = lazy(() =>
  import("../../../pages/arcade").then((module) => ({
    default: module.ArcadePage,
  })),
);

export const ArcadeRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArcadeIndexPage />
    </Suspense>
  );
};
