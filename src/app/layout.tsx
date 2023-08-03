import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./components/template/Footer";
import { Menu } from "./components/template/Menu";
import { Content } from "./components/template/Content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "challenges",
  description: "challenges",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + "container"}>
        <Menu />
        <Content >{children}</Content>
        <Footer />
      </body>
    </html>
  );
}
