export const AppPath = {
  Shop: "shop",
  ShopCatchAll: "shop/*",
} as const;

export type AppPath = (typeof AppPath)[keyof typeof AppPath];
