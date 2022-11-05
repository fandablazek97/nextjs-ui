import { forwardRef, useState, useId } from "react";

type FormSwitchProps = {
  name: string;
  label: React.ReactNode | string;
  hasHiddenLabel?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isDefaultChecked?: boolean;
  color?: "primary" | "secondary" | "accent" | "neutral";
  className?: string;
  [x: string]: any;
};

// isDisabled classes
const disabledClasses = "cursor-not-allowed opacity-60";

// Color classes
const colorClasses = {
  primary:
    "peer-checked:bg-primary peer-focus:ring-primary-active/70 before:bg-white",
  secondary:
    "peer-checked:bg-secondary peer-focus:ring-secondary-active/70 before:bg-white",
  accent:
    "peer-checked:bg-accent peer-focus:ring-accent-active/70 before:bg-white",
  neutral:
    "peer-checked:bg-neutral peer-focus:ring-neutral-active/70 before:bg-white peer-checked:before:bg-neutral-content", // Neutrální barva z proměnných ve tmavém režimu splívá s ikonkou. Barvu ikonky nelze změnit pomocí utilit, proto, je neutrální barva nahrazená odstínem šedé
};

const FormSwitch = forwardRef<Ref, FormSwitchProps>(
  (
    {
      // Component props
      name = "switch_name",
      label = "this is a switch label",
      hasHiddenLabel = false,
      isRequired = false,
      isDisabled = false,
      isDefaultChecked = false,
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
      <label
        htmlFor={id + name}
        className={`relative inline-flex items-center gap-3 ${className}`}
      >
        <input
          ref={ref}
          type="checkbox"
          id={id + name}
          name={name}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          required={isRequired}
          disabled={isDisabled}
          readOnly={isDisabled}
          {...rest}
          className="peer sr-only"
        />
        <div
          className={`h-6 w-11 rounded-full bg-body-200 transition-colors duration-300 ease-out-back 
          before:absolute before:top-[2px] before:left-[2px] before:h-5 before:w-5 before:rounded-full 
          before:transition-transform before:duration-300 before:ease-out-back 
          before:content-[''] peer-checked:before:translate-x-full peer-focus:outline-none peer-focus:ring-4
          ${colorClasses[color]} 
          ${isDisabled ? disabledClasses : "cursor-pointer"}
          `}
        />
        <span
          className={`text-copy 
          ${hasHiddenLabel ? "sr-only cursor-auto" : ""}
          ${!hasHiddenLabel && isDisabled ? "cursor-auto" : "cursor-pointer"}
        `}
        >
          {isRequired && <span className="mr-1 text-error">*</span>}
          <span>{label}</span>
        </span>
      </label>
    );
  }
);

export type Ref = HTMLInputElement;

FormSwitch.displayName = "FormSwitch";

export default FormSwitch;
