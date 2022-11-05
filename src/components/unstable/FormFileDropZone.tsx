import { forwardRef, useRef, useState } from "react";
import { HiOutlineCloudArrowUp } from "react-icons/hi2";
import { mergeRefs } from "../../utils/mergeRefs";

type FormFileDropZoneProps = {
  id: string;
  name: string;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  helperText?: React.ReactNode | string | null;
  className?: string;
  [x: string]: any;
};

// isDisabled classes
const disabledClasses = "cursor-not-allowed opacity-60";

// Radius classes
const radiusClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

const FormFileDropZone = forwardRef<Ref, FormFileDropZoneProps>(
  (
    {
      // Component props
      id = "input_id",
      name = "input_name",
      label = "Nahrajte nebo přetáhněte soubory",
      isRequired = false,
      isDisabled = false,
      isInvalid = false,
      radius = "lg",
      helperText = null,
      className = "",
      ...rest
    },
    ref
  ) => {
    // Component logic
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // called whet files are selected with click or when are dropped by dragging
    const handleChange = (e: any) => {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        setSelectedFile(e.target.files[0].name);
        setIsFilePicked(true);
      }
    };

    // handeling drag events
    const handleDrag = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

    // triggers when files are dropped
    const handleDrop = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        setIsFilePicked(true);
      }
    };

    return (
      // Component Markup
      <label
        htmlFor={id}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`relative flex w-full cursor-pointer flex-col items-center justify-center border-2 
        border-dashed py-6 transition-colors duration-200 hover:bg-body-50 
        ${dragActive ? "bg-body-50" : ""}
        ${radiusClasses[radius]} 
        ${isDisabled ? disabledClasses : ""}
        ${isInvalid ? "border-error-active" : "border-body-200"} 
        ${className}
        `}
      >
        <div className="flex flex-col items-center justify-center">
          <HiOutlineCloudArrowUp className="mb-2.5 text-3xl text-copy xl:text-4xl" />
          {!isFilePicked ? (
            <>
              <span className="mb-1.5 block max-w-prose text-center font-medium leading-tight text-copy">
                {label}
              </span>
              <span className="block max-w-prose text-center text-xs leading-normal text-copy-muted">
                {helperText}
              </span>
            </>
          ) : (
            <>
              <span className="block max-w-prose text-center font-medium leading-tight text-copy-muted">
                Vybraný soubor:
              </span>
              <span className="mt-2.5 block max-w-prose text-center text-lg font-bold leading-tight text-copy">
                {selectedFile}
              </span>
            </>
          )}
        </div>
        {dragActive && (
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`absolute inset-0 z-10 h-full w-full bg-red-500 ${radiusClasses[radius]}`}
          />
        )}
        <input
          ref={mergeRefs([inputRef, ref])}
          type="file"
          id={id}
          name={name}
          required={isRequired}
          disabled={isDisabled}
          readOnly={isDisabled}
          onChange={handleChange}
          className="hidden"
          {...rest}
        />
      </label>
    );
  }
);

export type Ref = HTMLInputElement;

FormFileDropZone.displayName = "FormFileDropZone";

export default FormFileDropZone;
