import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="cs" className="scroll-pt-28 scroll-smooth">
      <Head />
      <body className="text-copy overflow-x-hidden bg-body font-sans text-base font-normal antialiased transition-colors duration-150 selection:bg-primary/80 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
