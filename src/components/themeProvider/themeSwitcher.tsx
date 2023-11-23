"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // const renderThemeChanger = () => {
  //   if (!mounted) return null;

  //   const currentTheme = theme === "system" ? systemTheme : theme;
  //   if (currentTheme === "dark") {
  //     return (
  //       <FaSun
  //         className="w-6 h-6 text-yellow-500"
  //         role="button"
  //         onClick={() => setTheme("light")}
  //       />
  //     );
  //   } else if (currentTheme === "pink") {
  //     return (
  //       <FaMoon
  //         className="w-5 h-5 text-slate-950"
  //         role="button"
  //         onClick={() => setTheme("pink")}
  //       />
  //     );
  //   } else {
  //     return (
  //       <FaMoon
  //         className="w-5 h-5 text-slate-950"
  //         role="button"
  //         onClick={() => setTheme("dark")}
  //       />
  //     );
  //   }
  // };
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <FaSun
          className="w-6 h-6 text-yellow-500"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <FaMoon
          className="w-5 h-5 text-slate-950"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <>
      <div className="flex gap-5 justify-center items-center">
        {renderThemeChanger()}
        {/* <ul className="flex gap-3">
          <li
            className="rounded-full pink w-6 h-6 cursor-pointer"
            onClick={() => setTheme("pink")}
          />
          <li
            className="rounded-full turtle w-6 h-6 cursor-pointer"
            onClick={() => setTheme("turtle")}
          />
          <li
            className="rounded-full strawberry w-6 h-6 cursor-pointer"
            onClick={() => setTheme("strawberry")}
          />
          <li
            className="rounded-full sunrise w-6 h-6 cursor-pointer"
            onClick={() => setTheme("sunrise")}
          />
        </ul> */}
      </div>
    </>
  );
};

export default ThemeSwitcher;
