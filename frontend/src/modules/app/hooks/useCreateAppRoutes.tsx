import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { ShopRoutes } from "../components/ShopRoutes";
import { MainLayout } from "../components/MainLayout";
import { HomePage } from "../../../pages/HomePage";

export const useCreateAppRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopRoutes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* <Route path="/teams" element={<TeamPage/>}/> */}
      </Route>,
    ),
  );
};
