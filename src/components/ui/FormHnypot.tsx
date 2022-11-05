import { forwardRef, useId } from "react";
import styles from "./FormHnypot.module.css";

type FormHnypotProps = {
  type?: "text" | "tel" | "email" | "url";
  label: string;
  className?: string;
};

const FormHnypot = forwardRef<Ref, FormHnypotProps>(
  (
    {
      // Component props
      type = "text",
      label = "Label text",
    },
    ref
  ) => {
    // Component logic
    const id = useId();
    return (
      // Component Markup
      <>
        <label htmlFor={id} className={styles.hnyinput}>
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={id}
          placeholder={label}
          className={styles.hnyinput}
        />
      </>
    );
  }
);

export type Ref = HTMLInputElement;

FormHnypot.displayName = "FormHnypot";

export default FormHnypot;
