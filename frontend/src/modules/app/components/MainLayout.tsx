import { Outlet, NavLink } from "react-router-dom";
import {
  Gamepad2,
  Home,
  User,
  ShoppingCart,
  Users,
  Shield,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

interface UserType {
  username: string;
  role: string;
}

interface MainLayoutProps {
  user: UserType | null; // Нэвтрээгүй үед null байхыг зөвшөөрнө
}

export const MainLayout = ({ user }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/profile", icon: User, label: "Profile" },
    { path: "/shop", icon: ShoppingCart, label: "Shop" },
    { path: "/arcade", icon: Gamepad2, label: "Arcade" },
    { path: "/teams", icon: Users, label: "Teams" },
  ];

  // 💡 Энд 'user?.role' гэж Optional Chaining (?.) ашигласан эсэхээ шалгаарай.
  // Учир нь user нь null байх үед алдаа унахаас сэргийлнэ.
  const filteredMenuItems =
    user?.role === "admin"
      ? [...menuItems, { path: "/admin", icon: Shield, label: "Admin Panel" }]
      : menuItems;
  return (
    <div className="min-h-screen bg-[#050814] text-[#e5e9ff]">
      {/* MOBILE HEADER */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-[#0d1220] border-b border-[rgba(91,104,245,0.15)] z-50 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-6 h-6 text-[#5b68f5]" />
          <span className="font-bold text-lg">MLBB</span>
        </div>

        {/* Одоо энэ товчлуур дээрх 'user.role' нь App.tsx-ээс ирж буй пропсыг шууд уншина */}
        <div className="text-xs bg-white/10 px-2 py-1 rounded text-cyan-400 mr-2">
          Role: {user?.role}
        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-[#1a2234] rounded-lg"
        >
          {sidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-40
          bg-gradient-to-b from-[#0d1220] via-[#0d1220] to-[#0a0f1e]
          border-r border-[rgba(91,104,245,0.15)]
          shadow-2xl shadow-[#5b68f5]/10
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* LOGO */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-[#5b68f5] to-[#9333ea] rounded-xl flex items-center justify-center shadow-lg">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>

            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#5b68f5] via-[#06b6d4] to-[#9333ea] bg-clip-text text-transparent">
              MLBB
            </h1>
          </div>

          {/* NAVIGATION */}
          <nav className="space-y-2">
            {filteredMenuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative overflow-hidden
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#5b68f5] to-[#9333ea] text-white shadow-lg shadow-[#5b68f5]/40"
                        : "text-[#8b95b8] hover:bg-[#5b68f5]/10 hover:text-white"
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#5b68f5] to-[#9333ea]" />
                      )}

                      <Icon className="w-5 h-5 relative z-10" />
                      <span className="relative z-10 font-semibold">
                        {item.label}
                      </span>

                      {isActive && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-l-full" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MAIN CONTENT */}
      <main className="lg:ml-64 min-h-screen pt-16 lg:pt-0 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.08),transparent_40%)] pointer-events-none" />
        <div className="relative p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
