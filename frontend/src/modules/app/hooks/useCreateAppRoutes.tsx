import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { ShopRoutes } from "../components/ShopRoutes";
import { MainLayout } from "../components/MainLayout";
import { HomePage } from "../../../pages/HomePage";
import { TeamsRoutes } from "../components/TeamsRoutes";
import { AdminRoutes } from "../components/AdminRoutes";
import { ProfileRoutes } from "../components/ProfileRoutes";
import { ArcadeRoutes } from "../components/ArcadeRoutes";
import Register from "../../../pages/register";

export const useCreateAppRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/auth/register" element={<Register />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopRoutes />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/teams" element={<TeamsRoutes />} />
          <Route path="/admin" element={<AdminRoutes />} />
          <Route path="/profile" element={<ProfileRoutes />} />
          <Route path="/arcade" element={<ArcadeRoutes />} />
        </Route>
      </Route>,
    ),
  );
};
