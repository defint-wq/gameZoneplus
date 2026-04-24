import { lazy, Suspense } from "react";

const TeamsIndexPage = lazy(() =>
  import("../../../pages/Teams").then((module) => ({
    default: module.TeamsPage,
  })),
);

export const TeamsRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TeamsIndexPage />
    </Suspense>
  );
};
