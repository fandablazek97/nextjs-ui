import { forwardRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";

type ButtonProps = {
  children: string;
  as?: React.ElementType;
  variant?: "filled" | "outlined" | "tinted" | "plain";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "error";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isIconBox?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFocusable?: boolean;
  className?: string;
  onClick?: () => void;
  [x: string]: any;
};

const cvs = {
  base: "inline-flex items-center justify-center overflow-hidden font-medium tracking-wide no-underline outline-none transition duration-200 focus-visible:ring-4",
  variant: {
    filled: "",
    outlined:
      "shadow-[inset_0px_0px_0px_1px] bg-opacity-0 hover:bg-opacity-100",
    tinted: "bg-opacity-15 hover:bg-opacity-25",
    plain: "bg-opacity-0 hover:bg-opacity-15",
  },
  color: {
    filled: {
      primary: "bg-primary hover:bg-primary-active text-primary-content",
      secondary:
        "bg-secondary hover:bg-secondary-active text-secondary-content",
      accent: "bg-accent hover:bg-accent-active text-accent-content",
      neutral: "bg-neutral hover:bg-neutral-active text-neutral-content",
      info: "bg-info hover:bg-info-active text-info-content",
      success: "bg-success hover:bg-success-active text-success-content",
      warning: "bg-warning hover:bg-warning-active text-warning-content",
      error: "bg-error hover:bg-error-active text-error-content",
    },
    outlined: {
      primary:
        "bg-primary text-primary shadow-primary hover:text-primary-content",
      secondary:
        "bg-secondary text-secondary shadow-secondary hover:text-secondary-content",
      accent: "bg-accent text-accent shadow-accent hover:text-accent-content",
      neutral:
        "bg-neutral text-neutral shadow-neutral hover:text-neutral-content",
      info: "bg-info text-info shadow-info hover:text-info-content",
      success:
        "bg-success text-success shadow-success hover:text-success-content",
      warning:
        "bg-warning text-warning shadow-warning hover:text-warning-content",
      error: "bg-error text-error shadow-error hover:text-error-content",
    },
    // Used for tinted and plain variants
    tinted: {
      primary: "bg-primary hover:bg-primary-active text-primary",
      secondary: "bg-secondary hover:bg-secondary-active text-secondary",
      accent: "bg-accent hover:bg-accent-active text-accent",
      neutral: "bg-neutral hover:bg-neutral-active text-neutral",
      info: "bg-info hover:bg-info-active text-info",
      success: "bg-success hover:bg-success-active text-success",
      warning: "bg-warning hover:bg-warning-active text-warning",
      error: "bg-error hover:bg-error-active text-error",
    },
    focus: {
      primary: "focus-visible:ring-primary-active/70",
      secondary: "focus-visible:ring-secondary-active/70",
      accent: "focus-visible:ring-accent-active/70",
      neutral: "focus-visible:ring-neutral-active/70",
      info: "focus-visible:ring-info-active/70",
      success: "focus-visible:ring-success-active/70",
      warning: "focus-visible:ring-warning-active/70",
      error: "focus-visible:ring-error-active/70",
    },
  },
  radius: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },
  size: {
    xs: "px-2.5 py-1.5 text-xs md:px-4 md:py-2",
    sm: "px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm",
    md: "px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base",
    lg: "px-6 py-3 text-base md:px-8 md:py-4 md:text-lg",
    xl: "px-8 py-4 text-lg md:px-12 md:py-6 md:text-xl",
  },
  iconBoxSize: {
    xs: "aspect-[1/1] p-1.5 text-xs md:p-2",
    sm: "aspect-[1/1] p-2 text-xs md:p-2.5 md:text-sm",
    md: "aspect-[1/1] p-2.5 text-sm md:p-3 md:text-base",
    lg: "aspect-[1/1] p-3 text-base md:p-4 md:text-lg",
    xl: "aspect-[1/1] p-4 text-lg md:p-6 md:text-xl",
  },
};

const Button = forwardRef<Ref, ButtonProps>(
  (
    {
      as: Tag = "button",
      variant = "filled",
      color = "primary",
      radius = "sm",
      size = "md",
      leftIcon = null,
      rightIcon = null,
      isIconBox = false,
      isLoading = false,
      isDisabled = false,
      isFocusable = true,
      className = "",
      onClick,
      children,
      ...rest
    },
    ref
  ) => {
    // Affects `will change` property
    const [hover, setHover] = useState(false);
    return (
      <Tag
        ref={ref}
        className={`
          ${cvs.base}
          ${cvs.variant[variant]}
          ${variant === "filled" ? cvs.color.filled[color] : ""} 
          ${variant === "outlined" ? cvs.color.outlined[color] : ""}
          ${
            variant === "tinted" || variant === "plain"
              ? cvs.color.tinted[color]
              : ""
          } 
          ${cvs.radius[radius]} ${cvs.color.focus[color]}
          ${!isIconBox ? cvs.size[size] : cvs.iconBoxSize[size]}
          ${
            isLoading
              ? "pointer-events-none cursor-not-allowed"
              : "cursor-pointer"
          } 
          ${isDisabled ? "pointer-events-none opacity-60 grayscale-[30%]" : ""} 
          ${hover ? "will-change-transform" : "will-change-auto"}
          ${className}
        `}
        onClick={onClick}
        disabled={isDisabled || isLoading}
        aria-hidden={isDisabled || isLoading}
        tabIndex={isDisabled || isLoading || !isFocusable ? -1 : 0}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...rest}
      >
        {/* Left icon */}
        {leftIcon !== null && isIconBox === false && (
          <span
            className={`z-[1] mr-3 scale-[1.25] ${
              isLoading ? "invisible" : ""
            }`}
          >
            {leftIcon}
          </span>
        )}

        {/* Text */}
        <span
          className={`z-[1] ${isLoading ? "invisible" : ""} 
            ${isIconBox && size === "sm" ? "scale-[1.15]" : ""}
            ${isIconBox && size === "md" ? "scale-[1.3]" : ""}
            ${isIconBox && size === "lg" ? "scale-[1.4]" : ""}
            ${isIconBox && size === "xl" ? "scale-[1.6]" : ""}
        `}
        >
          {children}
        </span>

        {/* Left icon */}
        {rightIcon !== null && isIconBox === false && (
          <span
            className={`z-[1] ml-3 scale-[1.25] ${
              isLoading ? "invisible" : ""
            }`}
          >
            {rightIcon}
          </span>
        )}

        {/* Loading spinner */}
        {isLoading && (
          <CgSpinner className="z-1 absolute inset-0 m-auto h-[1.8em] w-[1.8em] animate-spinner" />
        )}
      </Tag>
    );
  }
);

// forwardRef
export type Ref = HTMLElement;

Button.displayName = "Button"; // viz: https://stackoverflow.com/questions/52992932/component-definition-is-missing-display-name-react-display-name

export default Button;
