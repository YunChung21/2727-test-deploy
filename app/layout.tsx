import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./pages/globalComponents/Header/header";
import Footer from "./pages/globalComponents/Footer/footer";
import Transition from "./pages/globalComponents/transition";
import "./globals.css";

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
      <body>
        <Transition>
          {children}
          <Footer />
        </Transition>
      </body>
    </html>
  );
}
