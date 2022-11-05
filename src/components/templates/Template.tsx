type TemplateProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [x: string]: any;
};

// 01 - Data array
// const templateArray = [
//   {
//     item: "Lorem ipsum",
//     value: "Lorem ipsum",
//   },
//   {
//     item: "Lorem ipsum",
//     value: "Lorem ipsum",
//   },
// ];

// 02 - Component Variant Styles
// const cvs = {
//   base: "",
//   variant: {
//     value: "",
//     value: "",
//     value: "",
//   },
// }

export default function Template({
  // Component props
  as: Tag = "div",
  className = "",
  children,
  onClick,
  ...rest
}: TemplateProps) {
  // Component logic
  return (
    // Component markup
    <Tag onClick={onClick} className={`${className}`} {...rest}>
      {children}
    </Tag>
  );
}
