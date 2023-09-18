import React from "react";
 import { Icons } from "./icons";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex border items-center bg-[#fafafa] shado dark:bg-[#040D12] dark:border-[#183D3D] p-2 px-4 w- justify-between rounded-full">
      <button
        className={`mr-2 p-1 dark:text-zinc-500 text-zinc-700 ${
          theme === "system"
            ? "bg-white dark:bg-[#0c2525f8] dark:text-gray-100 text-zinc-50 rounded-full shadow-xl"
            : ""
        }`}
        onClick={() => setTheme("system")}
      >
        <Icons.monitor classes="" />
      </button>
      <button
        className={`mr-2 p-1 dark:text-zinc-500 text-zinc-700 ${
          theme === "dark"
            ? "bg-white dark:bg-[#0c2525f8] dark:text-gray-100 text-zinc-50 rounded-full shadow-xl"
            : ""
        }`}
        onClick={() => setTheme("dark")}
      >
        <Icons.moon />
      </button>
      <button
        className={`mr-2 p-1 dark:text-zinc-500 text-zinc-700 ${
          theme === "light"
            ? "bg-neutral-200 dark:bg-[#0c2525f8]  text-zinc-700 rounded-full shadow-xl"
            : ""
        }`}
        onClick={() => setTheme("light")}
      >
        <Icons.sun />
      </button>
    </div>
  );
}
