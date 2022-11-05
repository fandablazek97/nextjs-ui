import { forwardRef, useState, useId } from "react";

type FormRadioProps = {
  name: string;
  label: React.ReactNode | string;
  hasHiddenLabel?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isDefaultChecked?: boolean;
  variant?: "filled" | "outlined";
  color?: "primary" | "secondary" | "accent" | "neutral";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  [x: string]: any;
};

const cvs = {
  base: "form-radio h-5 w-5 cursor-pointer rounded-full outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-4 focus-visible:ring-offset-0",
  isDisabled: "cursor-not-allowed opacity-60",
  isInvalid: "!border-error-active",
  variant: {
    filled: "bg-body-100 border-2 border-body-100",
    outlined: "bg-body border-2 border-body-200",
  },
  color: {
    primary: "checked:text-primary focus-visible:ring-primary-active/70",
    secondary: "checked:text-secondary focus-visible:ring-secondary-active/70",
    accent: "checked:text-accent focus-visible:ring-accent-active/70",
    neutral: "checked:text-gray-700 focus-visible:ring-gray-700/70", // Neutrální barva z proměnných ve tmavém režimu splívá s ikonkou. Barvu ikonky nelze změnit pomocí utilit, proto, je neutrální barva nahrazená odstínem šedé
  },
};

const FormRadio = forwardRef<Ref, FormRadioProps>(
  (
    {
      // Component props
      name = "radio_name",
      label = "this is a radio label",
      hasHiddenLabel = false,
      isRequired = false,
      isDisabled = false,
      isInvalid = false,
      isDefaultChecked = false,
      variant = "outlined",
      color = "primary",
      className = "",
      ...rest
    },
    ref
  ) => {
    // Component logic
    let [isChecked, setIsChecked] = useState<boolean | undefined>(
      isDefaultChecked
    );

    const id = useId();
    return (
      // Component Markup
      <div className={`flex items-center gap-3 ${className}`}>
        <input
          ref={ref}
          type="radio"
          id={id + name}
          name={name}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          required={isRequired}
          disabled={isDisabled}
          readOnly={isDisabled}
          {...rest}
          className={` 
          ${cvs.base}
          ${cvs.variant[variant]} 
          ${cvs.color[color]} 
          ${isDisabled ? cvs.isDisabled : ""}
          ${isInvalid ? cvs.isInvalid : ""}
          `}
        />
        <label
          htmlFor={id + name}
          className={`text-copy 
          ${hasHiddenLabel ? "sr-only cursor-auto" : ""}
          ${!hasHiddenLabel && isDisabled ? "cursor-auto" : "cursor-pointer"}
          `}
        >
          {isRequired && <span className="mr-1 text-error">*</span>}
          <span>{label}</span>
        </label>
      </div>
    );
  }
);

export type Ref = HTMLInputElement;

FormRadio.displayName = "FormRadio";

export default FormRadio;
