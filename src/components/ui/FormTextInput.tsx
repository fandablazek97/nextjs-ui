import { forwardRef, useId } from "react";

type FormTextInputProps = {
  type?: "text" | "tel" | "email" | "url";
  name: string;
  label: string;
  placeholder?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  variant?: "filled" | "outlined";
  color?: "primary" | "secondary" | "accent" | "neutral";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  hasFloatingLabel?: boolean;
  isLabelHidden?: boolean;
  helperText?: React.ReactNode | string | null;
  className?: string;
  [x: string]: any;
};

const cvs = {
  base: "form-input block w-full py-2.5 px-3 outline-none",
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
  floatingLabel: {
    container: "relative",
    input: "peer",
    label:
      "text-copy z-1 pointer-events-none absolute top-1 left-0 mb-2 block h-full origin-top-left translate-x-0 -translate-y-7 scale-[0.75] transform-gpu text-base font-medium opacity-90 transition duration-200 ease-out peer-placeholder-shown:translate-x-3 peer-placeholder-shown:translate-y-[7px] peer-placeholder-shown:scale-100 peer-placeholder-shown:opacity-60 peer-focus:translate-x-0 peer-focus:-translate-y-7 peer-focus:scale-[0.75] peer-focus:opacity-90",
  },
};

const FormTextInput = forwardRef<Ref, FormTextInputProps>(
  (
    {
      // Component props
      type = "text",
      name = "input_name",
      label = "Label text",
      placeholder = "Placeholder text",
      isRequired = false,
      isDisabled = false,
      isInvalid = false,
      variant = "outlined",
      color = "primary",
      radius = "md",
      hasFloatingLabel = false,
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
      <div
        className={`${
          hasFloatingLabel ? cvs.floatingLabel.container : ""
        } ${className}`}
      >
        {/* Normal label */}
        {!hasFloatingLabel && (
          <label
            htmlFor={id + name}
            className={`mb-2 block max-w-max text-sm font-medium text-copy ${
              isLabelHidden ? "sr-only" : ""
            }`}
          >
            <span>{label}</span>
            {isRequired && <span className="text-error">*</span>}
          </label>
        )}

        {/* Input */}
        <input
          ref={ref}
          type={type}
          id={id + name}
          name={name}
          required={isRequired}
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={isDisabled}
          {...rest}
          className={`
          ${cvs.base}
          ${cvs.variant[variant]} 
          ${cvs.color[color]}
          ${cvs.radius[radius]}
          ${hasFloatingLabel ? cvs.floatingLabel.input : ""} 
          ${
            hasFloatingLabel
              ? "placeholder-transparent"
              : "placeholder:text-copy-muted"
          }
          ${isDisabled ? cvs.isDisabled : ""}
          ${isInvalid ? cvs.isInvalid : ""}
        `}
        />

        {/* Floating label */}
        {hasFloatingLabel && (
          <label htmlFor={id + name} className={`${cvs.floatingLabel.label}`}>
            <span>{label}</span>
            {isRequired && <span className="text-error">*</span>}
          </label>
        )}

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

export type Ref = HTMLInputElement;

FormTextInput.displayName = "FormTextInput";

export default FormTextInput;
