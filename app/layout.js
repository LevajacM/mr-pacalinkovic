import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/global/Container";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.mrpacalinkovic.com"),
  title: "Mr Pacalinkovic - Najbolji palačinci u Sremskoj Mitrovici",
  description:
    "Probajte najukusnije palačinke u Sremskoj Mitrovici! Naručite sada ili nas posetite za nezaboravno gastronomsko iskustvo.",
  keywords: [
    "palacinci",
    "palacinke",
    "sremska mitrovica",
    "sendvici",
    "palacinak",
    "palacinka",
    "dorucak",
    "brza hrana",
    "porodicni restoran",
    "domaci palacinci",
    "dostava",
    "brza dostava",
  ],
  author: "Mr Pacalinkovic",
  robots: "index, follow",
  canonical: "https://www.mrpacalinkovic.com",
  openGraph: {
    title: "Mr Pacalinkovic - Najbolji palačinci u Sremskoj Mitrovici",
    description:
      "Probajte najukusnije palačinke u Sremskoj Mitrovici! Naručite sada ili nas posetite za nezaboravno gastronomsko iskustvo.",
    url: "https://www.mrpacalinkovic.com",
    siteName: "Mr Pacalinkovic",
    images: [
      {
        url: "/logo/mr-pacalinkovic-og.png",
        width: 1200,
        height: 630,
        alt: "Mr Pacalinkovic logo",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='sr-Latn'>
      <body className={inter.className}>
        <Container>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
