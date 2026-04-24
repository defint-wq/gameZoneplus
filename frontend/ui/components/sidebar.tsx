import React from "react";
import { cn } from "../utils";

type SidebarRootProps = React.ComponentProps<"aside">;
type SidebarGroupProps = React.ComponentProps<"div">;
type SidebarContentProps = React.ComponentProps<"div">;
type SidebarFooterProps = React.ComponentProps<"div">;

// --- 1. Root Component ---
const SidebarRoot = React.forwardRef<HTMLDivElement, SidebarRootProps>(
  ({ className, ...props }, ref) => (
    <aside
      ref={ref}
      data-sidebar="root"
      className={cn(
        "flex h-full w-64 flex-col border-r bg-background",
        className,
      )}
      {...props}
    />
  ),
);
SidebarRoot.displayName = "Sidebar";

// --- 2. Content Component ---
const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn("flex-1 overflow-y-auto", className)}
      {...props}
    />
  ),
);
SidebarContent.displayName = "SidebarContent";

// --- 3. Group Component ---
const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full flex-col py-3 px-4", className)}
      {...props}
    />
  ),
);
SidebarGroup.displayName = "SidebarGroup";

// --- 4. Footer Component ---
const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col border-t p-4", className)}
      {...props}
    />
  ),
);
SidebarFooter.displayName = "SidebarFooter";

const Sidebar = Object.assign(SidebarRoot, {
  Content: SidebarContent,
  Group: SidebarGroup,
  Footer: SidebarFooter,
});

export default Sidebar;
