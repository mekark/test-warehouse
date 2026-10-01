import type { Metadata } from "next";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});

                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';

                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {children}

        <ScrollToTopButton />
      </body>
    </html>
  );
}
