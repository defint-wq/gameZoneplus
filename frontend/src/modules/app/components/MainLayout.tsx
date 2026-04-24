import { Outlet } from "react-router-dom";
import { NavigationCoreModules } from "../../navigation/NavigationCoreModules";
import Sidebar from "../../../../ui/components/sidebar";

export const MainLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0f172a]">
      {/* Sidebar ашигласан хэсэг */}
      <Sidebar className="hidden md:flex border-slate-800 bg-[#0f172a]">
        {/* Толгой хэсэг */}
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="text-2xl">⚔️</div>
            <h1 className="text-xl font-bold text-white">gameZone</h1>
          </div>
        </div>

        {/* Үндсэн навигаци */}
        <Sidebar.Content className="px-4">
          <Sidebar.Group>
            <NavigationCoreModules />
          </Sidebar.Group>
        </Sidebar.Content>

        {/* Шаардлагатай бол Footer нэмж болно */}
        <Sidebar.Footer className="border-slate-800">
          <div className="text-slate-400 text-xs">v1.0.0</div>
        </Sidebar.Footer>
      </Sidebar>

      {/* Үндсэн контент */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
