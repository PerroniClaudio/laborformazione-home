import "../globals.css";
import { Metadata } from "next";
import TopBar from "@/components/topBar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Inter } from "next/font/google";
const interFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laborformazione",
  description: "Corsi di formazione in ambito privacy e cybersecurity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interFont.className} antialiased overflow-x-hidden`}>
        <TopBar />
        <main className="max-w-7xl flex flex-col gap-4 mx-auto">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
