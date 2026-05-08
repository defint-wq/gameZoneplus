import { lazy, Suspense } from "react";

const ProfileIndexPage = lazy(() =>
  import("../../../pages/profile").then((module) => ({
    default: module.ProfilePage,
  })),
);

export const ProfileRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileIndexPage />
    </Suspense>
  );
};
