import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibm = IBM_Plex_Sans({ weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Jonas Rettig",
  description: "Jonas Rettig's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm.className}>{children}</body>
    </html>
  );
}
