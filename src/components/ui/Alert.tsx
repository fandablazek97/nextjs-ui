import { forwardRef, useState } from "react";
import {
  HiCheckCircle,
  HiExclamationCircle,
  HiInformationCircle,
  HiXCircle,
  HiXMark,
} from "react-icons/hi2";

type AlertProps = {
  as?: React.ElementType;
  title: string;
  text?: string;
  status?: "success" | "error" | "warning" | "info" | "neutral";
  variant?: "filled" | "tinted";
  hasIcon?: boolean;
  isDismissable?: boolean;
  isVisible?: boolean;
  className?: string;
  [x: string]: any;
};

const cvs = {
  base: "flex w-full items-start justify-between gap-5 rounded-lg py-6 px-5",
  filled: {
    info: "bg-info text-info-content",
    success: "bg-success text-success-content",
    warning: "bg-warning text-warning-content",
    error: "bg-error text-error-content",
    neutral: "bg-neutral text-neutral-content",
  },
  tinted: {
    info: "bg-info-active/15 text-info",
    success: "bg-success-active/15 text-success",
    warning: "bg-warning-active/15 text-warning",
    error: "bg-error-active/15 text-error",
    neutral: "bg-neutral-active/15 text-neutral",
  },
};

const Alert = forwardRef<Ref, AlertProps>(
  (
    {
      // Component props
      as: Tag = "div",
      title = "This is alert message",
      text,
      status = "info",
      variant = "filled",
      hasIcon = true,
      isDismissable = true,
      isVisible = true,
      className = "",
      ...rest
    },
    ref
  ) => {
    // Component logic
    const [isShown, setIsShown] = useState(isVisible);

    function hideAlert() {
      setIsShown(false);
    }
    return isShown ? (
      <Tag
        ref={ref}
        className={`
        ${cvs.base} 
        ${variant === "filled" ? cvs.filled[status] : cvs.tinted[status]}
        ${className}
        `}
        {...rest}
      >
        <div className="mr-auto flex flex-col items-start justify-start gap-5 sm:flex-row">
          {hasIcon && status === "info" && (
            <div className="hidden xs:block sm:pt-1">
              <HiInformationCircle className="text-3xl" />
            </div>
          )}
          {hasIcon && status === "success" && (
            <div className="hidden xs:block sm:pt-1">
              <HiCheckCircle className="text-3xl" />
            </div>
          )}
          {hasIcon && status === "warning" && (
            <div className="hidden xs:block sm:pt-1">
              <HiExclamationCircle className="text-3xl" />
            </div>
          )}
          {hasIcon && status === "error" && (
            <div className="hidden xs:block sm:pt-1">
              <HiXCircle className="text-3xl" />
            </div>
          )}
          {hasIcon && status === "neutral" && (
            <div className="hidden xs:block sm:pt-1">
              <HiInformationCircle className="text-3xl" />
            </div>
          )}
          <div>
            <span className="text-lg font-semibold sm:text-xl">{title}</span>
            {(text !== null || text !== undefined) && <p>{text}</p>}
          </div>
        </div>
        {isDismissable && (
          <button
            onClick={hideAlert}
            className={`self-start rounded-md text-xl outline-none transition-opacity duration-150 hover:opacity-60 focus-visible:ring-4 focus-visible:ring-current sm:text-2xl`}
            aria-label="zavřít upozornění"
          >
            <HiXMark />
          </button>
        )}
      </Tag>
    ) : null;
  }
);

export type Ref = HTMLElement;

Alert.displayName = "Alert";

export default Alert;
