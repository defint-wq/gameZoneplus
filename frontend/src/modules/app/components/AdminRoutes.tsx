import { lazy, Suspense } from "react";

const AdminIndexPage = lazy(() =>
  import("../../../pages/admin").then((module) => ({
    default: module.AdminPage,
  })),
);

export const AdminRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminIndexPage />
    </Suspense>
  );
};
