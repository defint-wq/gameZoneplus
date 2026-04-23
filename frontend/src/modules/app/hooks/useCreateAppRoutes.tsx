import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AppPath } from "../types/AppPath";
import { ShopRoutes } from "../components/ShopRoutes";

export const useCreateAppRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path={AppPath.ShopCatchAll} element={<ShopRoutes />} />,
    ),
  );
};
