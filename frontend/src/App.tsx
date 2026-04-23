import { AppRouter } from "./modules/app/components/AppRoutes";
import { NavigationCoreModules } from "./modules/navigation/NavigationCoreModules";

export const App = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 border-r bg-sidebar">
        <nav className="p-4">
          <NavigationCoreModules />
        </nav>
      </aside>

      <main className="flex-1">
        <AppRouter />
      </main>
    </div>
  );
};
