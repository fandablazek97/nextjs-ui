import { CgSpinner } from "react-icons/cg";

type SpinnerProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "none" | "inherit";
  color?: "primary" | "white" | "black" | "muted" | "rich" | "none" | "inherit";
  className?: string;
  [x: string]: any;
};

const cvs = {
  base: "animate-spinner",
  size: {
    xs: "text-base",
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-5xl",
    xl: "text-7xl",
    none: "",
    inherit: "text-[1em]",
  },
  color: {
    primary: "text-primary",
    white: "text-white",
    black: "text-gray-900",
    muted: "text-copy-muted",
    rich: "text-copy-rich",
    none: "",
    inherit: "text-current",
  },
};

export default function Spinner({
  size = "md",
  color = "primary",
  className = "",
  ...rest
}: SpinnerProps) {
  return (
    <CgSpinner
      className={`${cvs.base} ${cvs.size[size]} ${cvs.color[color]} ${className}`}
      {...rest}
    />
  );
}
