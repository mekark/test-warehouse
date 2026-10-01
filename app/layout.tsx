import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import "./globals.css";

const GTM_ID = "GTM-5SBMM86H";

export const metadata: Metadata = {
  title:
    "India's No.1 Warehouse Construction Company | PEB Warehouse Design & Build Experts",
  description:
    "Mekark delivers turnkey warehouse construction, PEB warehouse construction, and industrial warehouse design & build solutions across India.",
  icons: {
    icon: "/Images/LogoMekark.webp",
    shortcut: "/Images/LogoMekark.webp",
    apple: "/Images/LogoMekark.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <GoogleTagManager gtmId={GTM_ID} />
      <body className="min-h-full flex flex-col">
        {children}

        <ScrollToTopButton />
      </body>
    </html>
  );
}
