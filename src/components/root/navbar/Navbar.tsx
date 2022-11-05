import BrandLogotype from "@ui/BrandLogotype";
import Wrapper from "@ui/Wrapper";
import { useScrollPosition } from "@hooks/useScrollPosition";
import AppLink from "@ui/AppLink";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Menu from "./Menu";
import NavbarCta from "./NavbarCta";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const navScrolled = currPos.y < -48;
      const navScrolledFurther = currPos.y > -640;
      const navScrolledDown = currPos.y > prevPos.y;
      const navIsHidden = navScrolledFurther || navScrolledDown;

      // Scrolled state of navbar
      if (navScrolled !== isScrolled) setIsScrolled(navScrolled);

      // Hide / Show navbar
      if (navIsHidden !== isVisible) setIsVisible(navIsHidden);
    },
    [isVisible, isScrolled]
  );

  return (
    <nav
      className={`fixed isolate z-40 h-16 w-screen transition-[background,transform,opacity,box-shadow] duration-500 sm:h-20 2xl:h-24 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolled ? "bg-body/80 backdrop-blur-md" : ""} 
        ${
          isVisible && isScrolled ? "shadow-xl dark:shadow-none" : "shadow-none"
        }
      `}
    >
      <Wrapper
        size="lg"
        className="flex h-full items-center justify-end gap-5 sm:gap-8 md:gap-10"
      >
        {/* Logo */}
        <AppLink href="/" passHref>
          <a className="z-10 mr-auto origin-left scale-75 outline-none focus-visible:ring-4 focus-visible:ring-copy-rich/70 sm:scale-100">
            <BrandLogotype variant="light-background" className="dark:hidden" />
            <BrandLogotype
              variant="dark-background"
              className="hidden dark:block"
            />
          </a>
        </AppLink>

        {/* Links */}
        <NavbarLinks className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block" />

        {/* Call to action */}
        <NavbarCta className="hidden lg:block" />

        <ThemeSwitcher />

        <Menu className="block lg:hidden" />
      </Wrapper>
    </nav>
  );
}
