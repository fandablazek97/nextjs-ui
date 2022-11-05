import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi2";

type ThemeSwitcherProps = {
  className?: string;
};

export default function ThemeSwitcher({
  // Component props
  className = "",
}: ThemeSwitcherProps) {
  // Component logic
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function switchTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    // Component markup
    <button
      className={`flex h-11 w-11 items-center justify-center rounded-md bg-body-100 outline-none transition-colors duration-200 hover:bg-body-200 focus-visible:ring-4 focus-visible:ring-copy ${className}`}
      aria-label="Přepnout na tmavý / světlý režim"
      onClick={switchTheme}
    >
      {theme === "light" ? (
        <HiMoon className="scale-95 text-2xl text-copy" />
      ) : (
        <HiSun className="text-2xl text-copy" />
      )}
    </button>
  ) : (
    <div className="h-11 w-11 bg-transparent"></div>
  );
}
