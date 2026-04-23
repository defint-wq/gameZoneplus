import { Route, Routes, Navigate } from "react-router-dom";
import { ShopRoutes } from "./ShopRoutes";
import { HomePage } from "../../../pages/HomePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopRoutes />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
