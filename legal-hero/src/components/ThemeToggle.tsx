"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="
        fixed top-5 right-5 z-50
        w-10 h-10 rounded-full
        bg-white dark:bg-slate-800
        border border-slate-200 dark:border-slate-700
        shadow-md
        flex items-center justify-center
        text-slate-600 dark:text-slate-300
        hover:scale-105 active:scale-95
        transition-all duration-200
        cursor-pointer
      "
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
