import { Navigate, Outlet } from "react-router-dom";

export const AdminProtectedRoute = ({ user }) => {
  // Хэрэв хэрэглэгч байхгүй эсвэл үүрэг нь админ биш бол
  if (!user || user.role !== "admin") {
    // replace={true} нь түүхийг устгах тул хөтчийн "Back" товч дарахад буцаж орж болохгүй болгоно
    return <Navigate to="/" replace />;
  }

  // Хэрэв админ мөн бол доторх хуудсыг (children эсвэл Outlet) хэвийн ачаална
  return <Outlet />;
};