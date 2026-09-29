import type { Metadata } from "next";
import Script from "next/script";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";

import { Geist, Geist_Mono, Manrope } from "next/font/google";

import "./globals.css";

const GTM_ID = "GTM-5SBMM86H";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "India's No.1 Warehouse Construction Company | PEB Warehouse Design & Build Experts",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });

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

        {/* Tawk.to */}
        <Script
          id="tawk-to"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {};
              var Tawk_LoadStart = new Date();

              (function() {
                var s1 = document.createElement("script");
                var s0 = document.getElementsByTagName("script")[0];

                s1.async = true;
                s1.src = "https://embed.tawk.to/69fd7e65427c251c368c1e92/1jo33bfff";
                s1.charset = "UTF-8";
                s1.setAttribute("crossorigin", "*");

                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />

        {children}

        <FloatingWhatsApp />
      </body>
    </html>
  );
}