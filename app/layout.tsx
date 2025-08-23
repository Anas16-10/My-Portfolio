import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anas Ahmed — Portfolio",
  description: "Portfolio of Anas Ahmed: AI/ML, Full‑Stack, IEEE leadership, projects and skills.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
