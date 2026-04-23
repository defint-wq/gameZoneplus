import { useNavigate } from "react-router-dom";

export const NavigationMenuGroup = ({
  name,
  children,
  defaultOpen = true,
}: {
  name: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  return (
    <div className="nav-group-container">
      <details open={defaultOpen} className="group">
        <summary className="flex items-center cursor-pointer list-none py-2 px-3 font-semibold text-xs uppercase tracking-wider">
          <span className="mr-2 transition-transform group-open:rotate-90">
            ▶
          </span>
          {name}
        </summary>

        <nav className="pl-4 mt-1">{children}</nav>
      </details>
    </div>
  );
};

export const NavigationMenuLinkItem = ({
  path,
  name,
  icon: Icon,
}: {
  path: string;
  name: string;
  icon?: React.ElementType;
}) => {
  const navigate = useNavigate();

  return (
    <a
      href={path}
      onClick={(e) => {
        e.preventDefault();
        navigate(path);
      }}
      className="flex items-center gap-3 py-2 px-4 hover:bg-gray-100 rounded-md"
    >
      {Icon && <Icon className="size-4" />}
      <span className="text-sm">{name}</span>
    </a>
  );
};
