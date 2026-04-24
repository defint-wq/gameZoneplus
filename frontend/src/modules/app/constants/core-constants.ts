import type { ICoreModule } from "../types/UIConfig";
import {
  IconAddressBook,
  IconShoppingCart,
  IconSword,
} from "@tabler/icons-react";

export const GET_CORE_MODULES = () => {
  const MODULES: ICoreModule[] = [
    { name: "shop", icon: IconShoppingCart, path: "/shop" },
    { name: "news", icon: IconAddressBook, path: "news" },
    { name: "arcade", icon: IconSword, path: "arcade" },
    { name: "teams", icon: IconSword, path: "/teams" },
  ];

  return MODULES;
};
