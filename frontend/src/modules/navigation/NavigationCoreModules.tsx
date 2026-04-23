import { useMemo } from "react";
import { GET_CORE_MODULES } from "../app/constants/core-constants";
import { NavigationMenuGroup, NavigationMenuLinkItem } from "./NavigationMenu";

export const NavigationCoreModules = () => {
  const CORE_MODULES = useMemo(() => GET_CORE_MODULES(), []);

  return (
    <NavigationMenuGroup name={""}>
      {CORE_MODULES.map((item) => (
        <NavigationMenuLinkItem
          key={item.name}
          name={item.name}
          icon={item.icon}
          path={item.path}
        />
      ))}
    </NavigationMenuGroup>
  );
};
