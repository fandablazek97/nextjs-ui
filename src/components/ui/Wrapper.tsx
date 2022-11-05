type WrapperProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "fluid";
  paddedContent?: "sm" | "md" | "lg" | "none";
  paddedContentTop?: "sm" | "md" | "lg" | "none";
  paddedContentBottom?: "sm" | "md" | "lg" | "none";
  className?: string;
  [x: string]: any;
};

const cvs = {
  base: "mx-auto w-[90%]",
  size: {
    sm: "max-w-3xl",
    md: "max-w-7xl",
    lg: "max-w-[1728px]",
    fluid: "",
  },
  paddedContent: {
    sm: "py-12 sm:py-16 xl:py-20",
    md: "py-20 sm:py-24 xl:py-32",
    lg: "py-32 sm:py-40 xl:py-52",
    none: "",
  },
  paddedContentTop: {
    sm: "pt-12 sm:pt-16 xl:pt-20",
    md: "pt-20 sm:pt-24 xl:pt-32",
    lg: "pt-32 sm:pt-40 xl:pt-52",
    none: "",
  },
  paddedContentBottom: {
    sm: "pb-12 sm:pb-16 xl:pb-20",
    md: "pb-20 sm:pb-24 xl:pb-32",
    lg: "pb-32 sm:pb-40 xl:pb-52",
    none: "",
  },
};

export default function Wrapper({
  as: Tag = "div",
  size = "md",
  paddedContent = "none",
  paddedContentTop = "none",
  paddedContentBottom = "none",
  className = "",
  children,
  ...Props
}: WrapperProps) {
  return (
    <Tag
      className={`${cvs.base} ${cvs.size[size]} 
      ${
        paddedContentTop === "none" && paddedContentBottom === "none"
          ? cvs.paddedContent[paddedContent]
          : cvs.paddedContentTop[paddedContentTop] +
            " " +
            cvs.paddedContentBottom[paddedContentBottom]
      } ${className}`}
      {...Props}
    >
      {children}
    </Tag>
  );
}
