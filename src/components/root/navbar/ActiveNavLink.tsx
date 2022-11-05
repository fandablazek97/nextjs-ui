import { useRouter } from "next/router";
import AppLink from "@ui/AppLink";

type ActiveNavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ActiveNavLink({
  href = "/",
  className = "",
  children,
  onClick,
}: ActiveNavLinkProps) {
  // Component logic
  const router = useRouter();
  const matches = router.pathname === href;
  return (
    // Component markup
    <AppLink
      href={href}
      onClick={onClick}
      hoverEffect="underline"
      className={`${matches ? "!text-primary" : ""} ${className}`}
    >
      {children}
    </AppLink>
  );
}
