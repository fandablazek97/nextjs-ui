import { useState, forwardRef } from "react";
import { Combobox } from "@headlessui/react";
import { HiChevronUpDown, HiCheck } from "react-icons/hi2";

type FormComboboxProps = {
  options: string[];
  label: string;
  name: string;
  isDisabled?: boolean;
  variant?: "filled" | "outlined";
  color?: "primary" | "secondary" | "accent" | "neutral";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  isLabelHidden?: boolean;
  helperText?: React.ReactNode | string | null;
  className?: string;
};

const cvs = {
  base: "form-input w-full py-2.5 px-3 text-base outline-none",
  isDisabled: "cursor-not-allowed opacity-60",
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
  options: {
    primary: "bg-primary text-primary-content",
    secondary: "bg-secondary text-secondary-secondary",
    accent: "bg-accent text-accent-content",
    neutral: "bg-neutral text-neutral-content",
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

const FormCombobox = forwardRef<Ref, FormComboboxProps>(
  (
    {
      // Component props
      options = [
        "Fanda",
        "Libor",
        "Marie",
        "Kuba",
        "Vláďa",
        "Dominik",
        "Adam",
        "Radek",
      ],
      name = "combobox_name",
      label = "Label text",
      isDisabled = false,
      variant = "outlined",
      color = "primary",
      radius = "md",
      isLabelHidden = false,
      helperText = null,
      className = "",
    },
    ref
  ) => {
    // Component logic
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [query, setQuery] = useState("");

    const filteredOptions =
      query === ""
        ? options
        : options.filter((option) => {
            return option.toLowerCase().includes(query.toLowerCase());
          });

    return (
      // Component Markup
      <Combobox
        as={"div"}
        name={name}
        value={selectedOption}
        onChange={setSelectedOption}
        className={`w-full ${className}`}
        disabled={isDisabled}
      >
        {/* Label */}
        <Combobox.Label
          className={`${
            isLabelHidden
              ? "sr-only"
              : "mb-2 block max-w-max text-sm font-medium text-copy"
          }`}
        >
          <span>{label}</span>
        </Combobox.Label>

        {/* Input & relative wrapper */}
        <div className="relative z-10 w-full">
          <Combobox.Input
            ref={ref}
            as={"input"}
            onChange={(event) => setQuery(event.target.value)}
            className={`
            ${cvs.base}
            ${cvs.variant[variant]} 
            ${cvs.color[color]}
            ${cvs.radius[radius]}
            ${isDisabled ? cvs.isDisabled : ""}
          `}
          />

          {/* Arrows button */}
          <Combobox.Button
            className={`absolute top-1/2 right-3 -translate-y-1/2`}
          >
            <HiChevronUpDown className="text-2xl text-copy" />
          </Combobox.Button>

          {/* Options */}
          <Combobox.Options
            className={`absolute left-0 right-0 top-14 max-h-[320px] w-full overflow-y-scroll bg-body py-1 shadow-lg dark:bg-body-100 dark:shadow-none ${
              radius === "full" ? cvs.radius.xl : cvs.radius[radius]
            }`}
          >
            {filteredOptions.map((option, i) => (
              <Combobox.Option key={i} value={option} className={`py-2`}>
                {({ active, selected }) => (
                  <li
                    className={`flex items-center justify-start gap-2 py-2 px-3 ${
                      active ? cvs.options[color] : ""
                    }`}
                  >
                    {selected && <HiCheck className="h-5 w-5 text-lg" />}
                    <span className={`block ${!selected ? "pl-7" : ""}`}>
                      {option}
                    </span>
                  </li>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>

        {/* Helper text */}
        {helperText !== null && (
          <div className={`mt-2 text-sm text-copy`}>{helperText}</div>
        )}
      </Combobox>
    );
  }
);

export type Ref = HTMLInputElement;

FormCombobox.displayName = "FormCombobox";

export default FormCombobox;
