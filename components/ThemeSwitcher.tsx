"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export function ThemeSwitcher({ swtichText }: { swtichText?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")} className="flex gap-5 text-lg">
          <CiLight className="text-2xl" />
          {swtichText && <span>SWITCH TO LIGHT THEME</span>}
        </button>
      ) : (
        <button onClick={() => setTheme("dark")} className="flex gap-5 text-lg">
          <CiDark className="text-2xl" />
          {swtichText && <span>SWITCH TO DARK THEME</span>}
        </button>
      )}
    </>
  );
}
