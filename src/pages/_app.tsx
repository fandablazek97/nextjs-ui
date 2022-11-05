import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import RootLayout from "@layouts/RootLayout";
import { config } from "@configs/site-config";

// Theme provider: https://github.com/pacocoursey/next-themes
import { ThemeProvider } from "next-themes";

// Global stylesheet: https://tailwindcss.com/docs/guides/nextjs
import "@styles/globals.css";

// Fonts: https://fontsource.org
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";

// Disable smooth scroll on route change: https://github.com/vercel/next.js/issues/20125#issuecomment-757547865
function useNormalScrollRoutes() {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      document.documentElement.classList.add("!scroll-auto");
    });
    router.events.on("routeChangeComplete", () => {
      document.documentElement.classList.remove("!scroll-auto");
    });
  });
}

export default function App({ Component, pageProps }: AppProps) {
  useNormalScrollRoutes();
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      storageKey={`${config.cookies.prefix}-dark-theme`}
    >
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}
