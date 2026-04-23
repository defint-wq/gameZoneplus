// MainLayout.tsx
import { Outlet } from "react-router-dom";
import { NavigationCoreModules } from "../../navigation/NavigationCoreModules";

export const MainLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0f172a]">
      <aside className="hidden md:flex flex-col w-64 border-r border-slate-800">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="text-2xl">⚔️</div>
            <h1 className="text-xl font-bold text-white">gameZone</h1>
          </div>
        </div>
        <nav className="flex-1 px-4">
          <NavigationCoreModules />
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
