import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import {
  DONUT_SHOP_NAME,
  DONUT_SHOP_DESCRIPTION,
  DONUT_SHOP_URL,
  DONUT_SHOP_ICON,
} from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | " + DONUT_SHOP_NAME,
    default: DONUT_SHOP_NAME,
  },
  description: DONUT_SHOP_DESCRIPTION,
  icons: {
    icon: DONUT_SHOP_ICON,
  },
  metadataBase: new URL(DONUT_SHOP_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
