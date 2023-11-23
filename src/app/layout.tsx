import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "../components/themeProvider/index";
import Provider from "../components/themeProvider/index";
import Navbar from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pavan Suthar",
  description: "MERN Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Provider>
          <Navbar />
          {children}{" "}
        </Provider>
      </body>
    </html>
  );
}
