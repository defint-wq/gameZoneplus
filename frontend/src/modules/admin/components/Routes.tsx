import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../../app/components/MainLayout";
import { HomePage } from "../../../pages/HomePage";
import { ProfilePage } from "../../../pages/profile";
import { AdminProtectedRoute } from "./ProtectedRoute";
import { AdminPage } from "../../../pages/admin";

export default function App() {
  // Энд хэрэглэгчийн мэдээллийг авна (Жишээ нь: Context эсвэл State)
  const user = { username: "mlbb_legend", role: "user" }; // 'admin' болгож туршаарай

  return (
    <BrowserRouter>
      <Routes>
        {/* Үндсэн Layout */}
        <Route element={<MainLayout user={user} />}>
          
          {/* Хэн ч орж болох нээлттэй замууд */}
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          
          {/* 🔒 ЗӨВХӨН АДМИН ОРОХ ХАМГААЛАГДСАН ЗАМ */}
          <Route element={<AdminProtectedRoute user={user} />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}