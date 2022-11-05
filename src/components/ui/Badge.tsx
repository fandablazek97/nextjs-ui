import { forwardRef } from "react";

type BadgeProps = {
  children: string;
  as?: React.ElementType;
  variant?: "filled" | "tinted" | "outlined";
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
  size?: "sm" | "md" | "lg";
  hasDot?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [x: string]: any;
};

const cvs = {
  base: "",
  variant: {
    filled: "text-opacity-90",
    tinted: "bg-opacity-15",
    outlined: "shadow-[inset_0px_0px_0px_1.5px] bg-transparent",
  },
  color: {
    filled: {
      primary: "bg-primary text-primary-content",
      secondary: "bg-secondary text-secondary-content",
      accent: "bg-accent text-accent-content",
      neutral: "bg-neutral text-neutral-content",
      info: "bg-info text-info-content",
      success: "bg-success text-success-content",
      warning: "bg-warning text-warning-content",
      error: "bg-error text-error-content",
    },
    tinted: {
      primary: "bg-primary-active text-primary",
      secondary: "bg-secondary-active text-secondary",
      accent: "bg-accent-active text-accent",
      neutral: "bg-neutral-active text-neutral",
      info: "bg-info-active text-info",
      success: "bg-success-active text-success",
      warning: "bg-warning-active text-warning",
      error: "bg-error-active text-error",
    },
    outlined: {
      primary: "text-primary shadow-primary",
      secondary: "text-secondary shadow-secondary",
      accent: "text-accent shadow-accent",
      neutral: "text-neutral shadow-neutral",
      info: "text-info shadow-info",
      success: "text-success shadow-success",
      warning: "text-warning shadow-warning",
      error: "text-error shadow-error",
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
    sm: "px-2.5 py-1.5 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-3.5 py-2.5 text-base",
  },
};

const Badge = forwardRef<Ref, BadgeProps>(
  (
    {
      // Component props
      as: Tag = "span",
      variant = "tinted",
      color = "primary",
      radius = "full",
      size = "md",
      hasDot = false,
      leftIcon = null,
      rightIcon = null,
      className = "",
      onClick,
      children,
      ...rest
    },
    ref
  ) => {
    // Component logic
    return (
      // Component markup
      <Tag
        ref={ref}
        className={`inline-flex items-center justify-center font-medium leading-none tracking-wide no-underline 
          ${cvs.variant[variant]}
          ${variant === "filled" ? cvs.color.filled[color] : ""} 
          ${variant === "tinted" ? cvs.color.tinted[color] : ""} 
          ${variant === "outlined" ? cvs.color.outlined[color] : ""} 
          ${cvs.radius[radius]} ${cvs.size[size]}
          ${className}
        `}
        onClick={onClick}
        {...rest}
      >
        {/* Dot */}
        {hasDot === true && (
          <span
            className={`mr-1.5 h-1.5 w-1.5 rounded-full bg-current opacity-70`}
          ></span>
        )}

        {/* Left icon */}
        {leftIcon !== null && (
          <span className={`mr-1 text-[1em]`}>{leftIcon}</span>
        )}

        {/* Text */}
        <span>{children}</span>

        {/* Left icon */}
        {rightIcon !== null && (
          <span className={`ml-1 text-[1em]`}>{rightIcon}</span>
        )}
      </Tag>
    );
  }
);

// forwardRef
export type Ref = HTMLElement;

Badge.displayName = "Button"; // viz: https://stackoverflow.com/questions/52992932/component-definition-is-missing-display-name-react-display-name

export default Badge;
