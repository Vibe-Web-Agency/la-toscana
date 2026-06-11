import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://latoscanaparis.fr";
const OG_IMAGE = `${BASE_URL}/images/salleprincipale.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | La Toscana",
    default: "La Toscana | Restaurant Franco-Italien Paris 12ème",
  },
  description:
    "Restaurant franco-italien au cœur du 12ème arrondissement de Paris. Pizzas, pâtes fraîches et spécialités italiennes dans une ambiance chaleureuse. Ouvert 7j/7.",
  keywords: [
    "restaurant paris 12",
    "restaurant italien paris",
    "pizzeria paris",
    "restaurant franco-italien",
    "La Toscana",
    "boulevard diderot",
    "pâtes fraîches paris",
    "pizza paris 12ème",
  ],
  authors: [{ name: "La Toscana" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "La Toscana",
    url: BASE_URL,
    title: "La Toscana | Restaurant Franco-Italien Paris 12ème",
    description:
      "Restaurant franco-italien au 94 boulevard Diderot, Paris 12ème. Pizzas, pâtes et cuisine italienne authentique. Ouvert 7j/7.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "La Toscana - Restaurant franco-italien Paris 12ème" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Toscana | Restaurant Franco-Italien Paris 12ème",
    description: "Restaurant franco-italien au cœur du 12ème arrondissement. Pizzas, pâtes, cuisine italienne authentique.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TWGFNXHL');`,
          }}
        />
        {/* VWA Tracker */}
        <script
          defer
          src={`https://tracker-production-9a75.up.railway.app/track.js?id=${process.env.NEXT_PUBLIC_BUSINESS_ID}`}
        />
        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FRJ296N77R" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FRJ296N77R');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWGFNXHL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

