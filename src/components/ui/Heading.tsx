type HeadingProps = {
  as: React.ElementType;
  size: "sm" | "md" | "lg" | "xl" | "2xl" | "none";
  color?:
    | "copy-rich"
    | "copy-muted"
    | "copy"
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "white"
    | "black"
    | "none";
  align?: "left" | "center" | "right" | "justify" | "inherit";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  font?: "sans" | "display" | "serif" | "mono";
  hasMarginBottom?: boolean;
  hasSeparator?: boolean;
  separatorPosition?: "left" | "center" | "right";
  separatorColor?: "primary" | "secondary" | "accent" | "neutral" | "current";
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
};

const cvs = {
  base: "",
  // Size classes -> https://tailwindcss.com/docs/font-size
  size: {
    sm: "text-lg",
    md: "text-xl xs:text-2xl",
    lg: "text-2xl xs:text-3xl lg:text-4xl",
    xl: "text-3xl xs:text-4xl lg:text-6xl",
    "2xl": "text-3xl xs:text-4xl sm:text-5xl lg:text-7xl",
    none: "",
  },
  color: {
    "copy-rich": "text-copy-rich",
    copy: "text-copy",
    "copy-muted": "text-copy-muted",
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    neutral: "text-neutral",
    white: "text-white",
    black: "text-black",
    none: "",
  },
  align: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
    inherit: "",
  },
  font: {
    sans: "font-sans",
    display: "font-display",
    serif: "font-serif",
    mono: "font-mono",
  },
  weight: {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  },
  hasMarginBottom: "mb-[0.65em]",
  separator: {
    base: "relative pb-6 before:absolute before:content-[''] before:bottom-0 before:w-16 before:h-[3px]",
    position: {
      left: "before:left-0 before:right-auto",
      center: "before:left-1/2 before:-translate-x-1/2",
      right: "before:left-auto before:right-0",
    },
    color: {
      primary: "before:bg-primary",
      secondary: "before:bg-secondary",
      accent: "before:bg-accent",
      neutral: "before:bg-neutral",
      current: "before:bg-current",
    },
  },
};

export default function Heading({
  as: Tag = "span",
  size = "md",
  color = "copy-rich",
  align = "inherit",
  weight = "bold",
  font = "sans",
  hasMarginBottom = false,
  hasSeparator = false,
  separatorPosition = "left",
  separatorColor = "primary",
  className = "",
  children,
  ...rest
}: HeadingProps) {
  return (
    <Tag
      className={`
      ${cvs.size[size]}
      ${cvs.color[color]}
      ${cvs.align[align]}
      ${cvs.weight[weight]}
      ${cvs.font[font]}
      ${hasMarginBottom ? cvs.hasMarginBottom : ""}
      ${hasSeparator ? cvs.separator.base : ""}
      ${hasSeparator ? cvs.separator.position[separatorPosition] : ""}
      ${hasSeparator ? cvs.separator.color[separatorColor] : ""}
      ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
