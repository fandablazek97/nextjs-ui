import { forwardRef, useId } from "react";
import { HiChevronDown } from "react-icons/hi2";

type FormSelectNativeProps = {
  children: React.ReactElement<HTMLOptionElement>;
  name: string;
  label: string;
  isMultipleSelect?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  variant?: "filled" | "outlined";
  color?: "primary" | "secondary" | "accent" | "neutral";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  isLabelHidden?: boolean;
  helperText?: React.ReactNode | string | null;
  className?: string;
  [x: string]: any;
};

const cvs = {
  base: "form-select block w-full px-3 pt-[9px] pb-[11px] outline-none",
  isDisabled: "cursor-not-allowed opacity-60",
  isInvalid: "!border-error-active",
  variant: {
    filled: "text-copy-rich bg-body-100 border border-body-100 focus:bg-body",
    outlined: "text-copy-rich bg-body border border-body-200 focus:bg-body",
  },
  color: {
    primary: "focus:border-primary focus:ring focus:ring-primary",
    secondary: "focus:border-secondary focus:ring focus:ring-secondary",
    accent: "focus:border-accent focus:ring focus:ring-accent",
    neutral: "focus:border-neutral focus:ring focus:ring-neutral",
  },
  radius: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },
};

const FormSelectNative = forwardRef<Ref, FormSelectNativeProps>(
  (
    {
      // Component props
      children,
      name = "select_name",
      label = "Label text",
      isMultipleSelect = false,
      isRequired = false,
      isDisabled = false,
      isInvalid = false,
      variant = "outlined",
      color = "primary",
      radius = "md",
      isLabelHidden = false,
      helperText = null,
      className = "",
      ...rest
    },
    ref
  ) => {
    // Component logic
    const id = useId();
    return (
      // Component Markup
      <div className={`${className}`}>
        {/* Label */}
        <label
          htmlFor={id + name}
          className={`mb-2 block max-w-max text-sm font-medium text-copy ${
            isLabelHidden ? "sr-only" : ""
          }`}
        >
          <span>{label}</span>
          {isRequired && <span className="text-error">*</span>}
        </label>

        {/* Input */}
        <div className="relative">
          {!isMultipleSelect && (
            <HiChevronDown
              aria-hidden={true}
              className="pointer-events-none absolute top-1/2 right-3 z-10 -translate-y-1/2 text-lg text-copy/60"
            />
          )}
          <select
            ref={ref}
            id={id + name}
            name={name}
            multiple={isMultipleSelect}
            required={isRequired}
            disabled={isDisabled}
            {...rest}
            className={`
            ${cvs.base}
            ${cvs.variant[variant]} 
            ${cvs.color[color]}
            ${cvs.radius[radius]}
            ${isDisabled ? cvs.isDisabled : ""}
            ${isInvalid ? cvs.isInvalid : ""}
            `}
          >
            {children}
          </select>
        </div>

        {/* Helper text */}
        {helperText !== null && (
          <div
            className={`mt-2 text-sm ${isInvalid ? "text-error" : "text-copy"}`}
          >
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

export type Ref = HTMLSelectElement;

FormSelectNative.displayName = "FormSelectNative";

export default FormSelectNative;
