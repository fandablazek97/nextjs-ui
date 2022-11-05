"use client";
// import Anchor from "@components/Anchor";
import Button from "@ui/Button";

type NavbarCtaProps = {
  className?: string;
};

export default function NavbarCta({ className = "" }: NavbarCtaProps) {
  return (
    <div className={`${className}`}>
      <div className="flex items-center gap-x-4 md:gap-x-8">
        <Button href="tel:+420123456789" color="primary" size="sm">
          Dokumentace
        </Button>
      </div>
    </div>
  );
}
