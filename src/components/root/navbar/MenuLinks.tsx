import ActiveNavLink from "./ActiveNavLink";
import { routes } from "@configs/routes";

type MenuLinksProps = {
  className?: string;
  onEachLinkClick?: () => void;
};

export default function MenuLinks({
  className = "",
  onEachLinkClick,
}: MenuLinksProps) {
  return (
    <ul
      className={`flex list-none flex-col space-y-5 leading-none ${className}`}
    >
      {routes.map((path) => (
        <li key={path.label}>
          <ActiveNavLink
            href={path.href}
            onClick={onEachLinkClick}
            className="text-2xl font-bold text-copy-rich md:text-4xl xl:text-5xl"
          >
            {path.label}
          </ActiveNavLink>
        </li>
      ))}
    </ul>
  );
}
