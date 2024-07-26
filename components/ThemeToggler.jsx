"use client";

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <p
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`${
        theme === "dark"
          ? "border-0 p-0 border-darkBlueColor"
          : "border-0 p-0 border-lightBlueColor"
      }`}
    >
      <SunIcon className="h-[24px] w-[24px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute top-[35%] h-[24px] w-[24px] rotate-0 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </p>
  );
};

export default ThemeToggler;
