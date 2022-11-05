import ActiveNavLink from "./ActiveNavLink";
import { routes } from "@configs/routes";

type NavbarLinksProps = {
  className?: string;
};

export default function NavbarLinks({ className = "" }: NavbarLinksProps) {
  return (
    <div className={`${className}`}>
      <ul className="flex list-none gap-6 xl:gap-8 2xl:gap-12">
        {routes.map((path) => (
          <li key={path.label}>
            <ActiveNavLink
              href={path.href}
              className="text-sm font-medium xl:text-base"
            >
              {path.label}
            </ActiveNavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
