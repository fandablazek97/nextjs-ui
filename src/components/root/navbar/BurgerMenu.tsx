type BurgerMenuProps = {
  isActivated?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function BurgerMenu({
  isActivated = false,
  onClick,
  className = "",
  ...rest
}: BurgerMenuProps) {
  return (
    <button
      onClick={onClick}
      className={`flex h-[30px] w-[44px] flex-col items-center justify-between p-[10px] ${className}`}
      {...rest}
    >
      <span className="sr-only">Otevřít / zavřít menu</span>
      <span
        aria-hidden="true"
        className={`bg-copy-rich block h-[1px] w-[24px] transform-gpu rounded-full transition duration-[240ms] ease-out-back ${
          isActivated ? "translate-y-[4.5px] -rotate-45" : ""
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`bg-copy-rich block h-[1px] w-[24px] transform-gpu rounded-full transition duration-[240ms] ease-out-back ${
          isActivated ? "translate-y-[-4.5px] rotate-45" : ""
        }`}
      ></span>
    </button>
  );
}
