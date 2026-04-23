import { RouterProvider } from "react-router-dom";
import { useCreateAppRouter } from "../hooks/useCreateAppRoutes";

export const AppRouter = () => {
  return <RouterProvider router={useCreateAppRouter()} />;
};
