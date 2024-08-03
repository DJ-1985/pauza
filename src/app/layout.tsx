import type { Metadata } from "next";

import "../styles/global.scss";

export const metadata: Metadata = {
  title: "Pauza",
  description: "Pauza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}
