import { NavigationCoreModules } from "../../navigation/NavigationCoreModules";
import { AppRouter } from "./AppRoutes";

export const MainLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0f172a]">
      {/* Navigation Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-slate-800 bg-[#0f172a]">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="text-2xl">⚔️</div>
            <h1 className="text-xl font-bold text-white tracking-tight">
              gameZone
            </h1>
          </div>
        </div>

        <nav className="flex-1 px-4">
          <NavigationCoreModules />
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-900/50">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div className="overflow-hidden">
              <div className="text-sm font-medium text-white truncate">
                Guest User
              </div>
              <div className="text-xs text-slate-400">Offline</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto custom-scrollbar">
        <AppRouter />
      </main>
    </div>
  );
};
