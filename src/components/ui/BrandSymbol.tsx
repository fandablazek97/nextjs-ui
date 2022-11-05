type BrandSymbolProps = {
  variant?: "light-background" | "dark-background";
  className?: string;
};

export default function BrandSymbol({
  variant = "light-background",
  className = "",
}: BrandSymbolProps) {
  return (
    <div className={`h-[48px] w-[48px] ${className}`}>
      {variant === "light-background" ? (
        <img
          src="/svg/brand-symbol-light-background.svg"
          alt="Logo značky"
          width="48"
          height="48"
          className="h-full w-full object-contain"
        />
      ) : (
        <img
          src="/svg/brand-symbol-dark-background.svg"
          alt="Logo značky"
          width="48"
          height="48"
          className="h-full w-full object-contain"
        />
      )}
    </div>
  );
}
