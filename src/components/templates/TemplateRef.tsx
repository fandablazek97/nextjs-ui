import { forwardRef } from "react";

type TemplateRefProps = {
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

const TemplateRef = forwardRef<Ref, TemplateRefProps>(
  (
    {
      // Component props
      as: Tag = "div",
      className = "",
      children,
      onClick,
      ...rest
    },
    ref
  ) => {
    // Component logic
    return (
      // Component Markup
      <Tag ref={ref} onClick={onClick} className={`${className}`} {...rest}>
        {children}
      </Tag>
    );
  }
);

export type Ref = HTMLElement;

TemplateRef.displayName = "TemplateRef";

export default TemplateRef;
