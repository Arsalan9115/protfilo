import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Arsalan Botawala | Full Stack Developer & IoT Builder",
  description: "Official portfolio of Arsalan Botawala. Full stack developer building scalable web applications and IoT systems in Ahmedabad.",
  keywords: [
    "Arsalan Botawala",
    "Arsalan Botawala portfolio",
    "Full Stack Developer Ahmedabad",
    "IoT Builder",
    "Next.js Developer"
  ],
  authors: [{ name: "Arsalan Botawala" }],
  creator: "Arsalan Botawala",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer className="text-center text-[10px] text-zinc-600 py-10 border-t border-white/5 mt-10">
          FRONTEND + BACKEND • Next.js API Routes • arsalanbotawala256@gmail.com
        </footer>
      </body>
    </html>
  );
}