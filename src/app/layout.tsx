import type { Metadata } from "next";
import "./globals.css";


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
      <body className={"font-mono"}>{children}</body>
    </html>
  );
}
