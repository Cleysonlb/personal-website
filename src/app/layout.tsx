import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultLocale, isLocale } from "@/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  applicationName: "Cleyson Leal",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const localeHeader = headersList.get("x-locale");
  const lang =
    localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;

  return (
    <html lang={lang} className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
