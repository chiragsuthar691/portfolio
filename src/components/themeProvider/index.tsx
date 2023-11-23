"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { ThemeProvider } from "next-themes";

type Props = {
  children: string | React.JSX.Element | React.JSX.Element[];
};

const Provider = ({ children }: any) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
