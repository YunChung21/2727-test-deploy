import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Transition from "./pages/globalComponents/transition";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2727 coworking",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MR8V52R" />
      <body>
        <Transition>{children}</Transition>
      </body>
      <GoogleAnalytics gaId="AW-697289382" />
    </html>
  );
}
