type BrandLogotypeProps = {
  variant?: "dark-background" | "light-background";
  className?: string;
};

export default function BrandLogotype({
  variant = "light-background",
  className = "",
}: BrandLogotypeProps) {
  return (
    <div className={`h-[28px] w-[141px] ${className}`}>
      {variant === "light-background" ? (
        <img
          src="/brand/brand-logotype-light-background.svg"
          alt="Logo značky"
          width="141"
          height="28"
          className="h-full w-full object-contain"
        />
      ) : (
        <img
          src="/brand/brand-logotype-dark-background.svg"
          alt="Logo značky"
          width="141"
          height="28"
          className="h-full w-full object-contain"
        />
      )}
    </div>
  );
}
