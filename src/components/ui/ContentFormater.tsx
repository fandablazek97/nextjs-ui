import React from "react";

type ContentFormaterProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ContentFormater({
  children,
  className = "",
}: ContentFormaterProps) {
  return (
    <div
      className={`${className} prose-framework prose mx-auto max-w-5xl px-6 pb-40 prose-h1:text-5xl prose-h1:font-bold prose-h2:text-4xl prose-h2:font-bold prose-h3:text-2xl prose-h3:font-bold prose-h4:text-xl prose-h4:font-medium prose-h5:text-lg prose-h5:font-medium prose-h6:text-base prose-h6:font-medium
      `}
    >
      {children}
    </div>
  );
}
