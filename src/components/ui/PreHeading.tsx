type Props = {
  as?: React.ElementType;
  color?: "primary" | "secondary" | "accent" | "muted" | "default" | "rich";
  align?: "left" | "center" | "right" | "justify" | "inherit";
  hasMarginBottom?: boolean;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

const cvs = {
  base: "block text-base font-semibold tracking-wider xs:text-lg sm:text-xl",
  color: {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    muted: "text-copy-muted",
    default: "text-copy",
    rich: "text-copy-rich",
  },
  align: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
    inherit: "",
  },
  hasMarginBottom: "mb-[0.65em]",
};

export default function PreHeading({
  as: Tag = "span",
  color = "primary",
  align = "inherit",
  hasMarginBottom = false,
  className = "",
  children,
  ...rest
}: Props) {
  // Logic goes here
  return (
    <Tag
      className={`${cvs.base} ${cvs.color[color]} ${cvs.align[align]} 
      ${hasMarginBottom ? cvs.hasMarginBottom : ""} 
      ${className}
      `}
      {...rest}
    >
      {children}
    </Tag>
  );
}
