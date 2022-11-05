"use client";

import Wrapper from "@ui/Wrapper";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import MenuCta from "./MenuCta";
import MenuLinks from "./MenuLinks";

type MenuProps = {
  className?: string;
};

export default function Menu({ className = "" }: MenuProps) {
  let [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  // Vypíná scrollování při otevřeném menu
  useEffect(() => {
    if (isOpen === true) {
      document.body.classList.add(
        "overflow-hidden",
        "relative",
        "h-full",
        "touch-none"
      );
    } else {
      document.body.classList.remove(
        "overflow-hidden",
        "relative",
        "h-full",
        "touch-none"
      );
    }
    return () => {};
  }, [isOpen, setIsOpen]);

  return (
    <div className={`${className}`}>
      <BurgerMenu
        onClick={toggleMenu}
        isActivated={isOpen}
        className={`relative z-10`}
      />
      <div
        className={`fixed inset-0 z-0 h-screen w-screen overflow-y-auto bg-body-100 transition-[opacity,visibility] ease-out ${
          isOpen
            ? "visible opacity-100 duration-[400ms]"
            : "invisible opacity-0 duration-150"
        }`}
      >
        <Wrapper
          size="lg"
          className="flex flex-col items-start space-y-16 pt-28 pl-0 md:pt-36 lg:pl-[50%]"
        >
          <MenuLinks
            onEachLinkClick={closeMenu}
            className={`transform-gpu transition-[transform,opacity] ease-out ${
              isOpen
                ? "translate-y-0 opacity-100 delay-150 duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          />
          <MenuCta
            className={`transform-gpu transition-[transform,opacity] ease-out ${
              isOpen
                ? "translate-y-0 opacity-100 delay-300 duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          />
        </Wrapper>
      </div>
    </div>
  );
}
