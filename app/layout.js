import { Inter } from 'next/font/google';
import './globals.css';
import Container from '@/components/global/Container';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/global/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://www.mrpacalinkovic.com'),
  title: 'Mr Pacalinkovic - Najbolji palačinci u Sremskoj Mitrovici',
  description:
    'Probajte najukusnije palačinke u Sremskoj Mitrovici! Naručite sada ili nas posetite za nezaboravno gastronomsko iskustvo.',
  keywords: [
    // osnovne
    'palačinkarnica',
    'palacinkarnica',
    'palacinke',
    'palačinke',
    'slatke palačinke',
    'slane palačinke',
    'palačinke dostava',
    'palačinke Sremska Mitrovica',
    'palačinkarnica Sremska Mitrovica',
    'palacinke u Sremskoj Mitrovici',
    'najbolje palačinke',
    'domace palačinke',
    'domaće palačinke',
    'palačinke meni',
    'palačinke online porudžbina',
    'palačinke za poneti',

    // hrana i užina
    'brza hrana',
    'doručak',
    'doručak Sremska Mitrovica',
    'večera',
    'večera Sremska Mitrovica',
    'poslastice',
    'dezert',
    'slatkiš',
    'nutela palačinke',
    'voćne palačinke',
    'palačinke sa plazmom',
    'palačinke sa eurokremom',

    // lokalno i opisno
    'restoran Sremska Mitrovica',
    'porodični restoran',
    'porodicni restoran',
    'brza dostava',
    'dostava hrane',
    'dostava palačinki',
    'dostava Sremska Mitrovica',

    // dodatno za pretragu
    'palačinkarnica blizu mene',
    'gde jesti palačinke',
    'slatke i slane palačinke',
    'palačinke akcija',
    'palačinke cena',
    'palačinke meni Sremska Mitrovica',
    'noćna dostava palačinki',
  ],

  author: 'Mr Pacalinkovic',
  robots: 'index, follow',
  canonical: 'https://www.mrpacalinkovic.com',
  openGraph: {
    title: 'Mr Pacalinkovic - Najbolji palačinci u Sremskoj Mitrovici',
    description:
      'Probajte najukusnije palačinke u Sremskoj Mitrovici! Naručite sada ili nas posetite za nezaboravno gastronomsko iskustvo.',
    url: 'https://www.mrpacalinkovic.com',
    siteName: 'Mr Pacalinkovic',
    images: [
      {
        url: '/logo/mr-pacalinkovic-og.png',
        width: 1200,
        height: 630,
        alt: 'Mr Pacalinkovic logo',
      },
    ],
    locale: 'sr_RS',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='sr-Latn'>
      <body suppressHydrationWarning>
        <Container>
          <Navbar />
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
