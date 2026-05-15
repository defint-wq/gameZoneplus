import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  Outlet,
} from "react-router-dom";
import { ShopRoutes } from "../components/ShopRoutes";
import { MainLayout } from "../components/MainLayout";
import { HomePage } from "../../../pages/HomePage";
import { TeamsRoutes } from "../components/TeamsRoutes";
import { AdminRoutes } from "../components/AdminRoutes";
import { ProfileRoutes } from "../components/ProfileRoutes";
import { ArcadeRoutes } from "../components/ArcadeRoutes";

// 1. Хэрэглэгчийн төрлийг тодорхойлно
interface UserType {
  username: string;
  role: "admin";
}

interface UseCreateAppRouterProps {
  user: UserType | null;
}

// 2. Дотоод хамгаалалтын компонент (Зөвхөн админд харуулна)
const AdminProtectedRoute = ({ user }: { user: UserType | null }) => {
  if (!user || user.role === "admin") {
    return <Navigate to="/" replace />;
  }
  return <Outlet />; // Админ мөн бол AdminRoutes-ийг ачаална
};

export const useCreateAppRouter = ({ user }: UseCreateAppRouterProps = {} as UseCreateAppRouterProps) => {
  return createBrowserRouter(
    createRoutesFromElements(
      // MainLayout руу user-ийг дамжуулна
      <Route element={<MainLayout user={user} />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopRoutes />} />
        <Route path="/teams" element={<TeamsRoutes />} />
        <Route path="/profile" element={<ProfileRoutes />} />
        <Route path="/arcade" element={<ArcadeRoutes />} />
        
        <Route element={<AdminProtectedRoute user={user} />}>
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>,
    ),
  );
};