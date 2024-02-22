import "./globals.css";
import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

const titillium_Web = Titillium_Web({ subsets: ["latin"], weight: ["200", "400", "600", "900"] });

export const metadata: Metadata = {
  title: "TechStore App",
  description: "Electronic Devices Store application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${titillium_Web.className} text-slate-700`}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
