import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export const links = [
  { href: "/", label: "Početna" },
  { href: "/meni", label: "Meni" },
  { href: "/kontakt", label: "Kontakt" },
];

export const socialIcons = [
  {
    href: "https://www.facebook.com/p/Palacinkarnica-Mister-Pacalinkovic-100068327874172/",
    icon: <MdFacebook />,
  },
  {
    href: "https://www.instagram.com/p/BfyUoFtAwog/",
    icon: <AiFillInstagram />,
  },
  {
    href: "https://www.google.com/maps/place/Mister+Pa%C4%8Dalinkovi%C4%87/@44.9669718,19.6094189,15z/data=!4m6!3m5!1s0x475ba53e94ecba47:0x86dc485657b2d93f!8m2!3d44.9669718!4d19.6094189!16s%2Fg%2F11tfb7l9lj?entry=ttu",
    icon: <FaLocationDot />,
  },
];

export const products = [
  {
    title: "Palačinka sa kremom od jagode",
    link: "/meni/slatke/22",
    thumbnail: "/meni/jagoda-krem.jpg",
  },
  {
    title: "Kinder Bueno",
    link: "/meni/slatke/12",
    thumbnail: "/meni/kinder.jpg",
  },
  {
    title: "Kit Kat",
    link: "/meni/slatke/11",
    thumbnail: "/meni/kitket.jpg",
  },

  {
    title: "Rafaelo",
    link: "/meni/slatke/9",
    thumbnail: "/meni/rafaelo.jpg",
  },
  {
    title: "Nutela",
    link: "/meni/slatke/10",
    thumbnail: "/meni/nutela.jpg",
  },
  {
    title: "Mr Tost Sendvič",
    link: "/meni/sendviči/28",
    thumbnail: "/meni/mr-tost.jpg",
  },

  {
    title: "Sremački Trio",
    link: "/meni/slane/7",
    thumbnail: "/meni/sremacki-trio.jpg",
  },
  {
    title: "kulen",
    link: "/meni/slane/3",
    thumbnail: "/meni/kulen.jpg",
  },
  {
    title: "Pečenica",
    link: "/meni/slane/1",
    thumbnail: "/meni/pecenica.jpg",
  },
  {
    title: "Duo Miks",
    link: "/meni/slane/4",
    thumbnail: "/meni/duo-mix.jpg",
  },
  {
    title: "Prazna Proteinska",
    link: "/meni/proteinske/25",
    thumbnail: "/meni/prot-prazna.jpg",
  },
  {
    title: "Lešnik Puter",
    link: "/meni/proteinske/27",
    thumbnail: "/meni/prot-lesnik-puter.jpg",
  },
  {
    title: "Krem od Pistaća",
    link: "/meni/proteinske/24",
    thumbnail: "/meni/prot-pistaci.jpg",
  },

  {
    title: "Kikiriki Puter",
    link: "/meni/proteinske/26",
    thumbnail: "/meni/prot-kikiriki-puter.jpg",
  },

  {
    title: "Kikiriki Puterom i Džem",
    link: "/meni/proteinske/23",
    thumbnail: "/meni/prot-kikiriki-puter-dz.jpg",
  },
];

export const meni = [
  {
    id: 1,
    title: "Palačinka sa pečenicom",
    category: "slane",
    price: 350,
    img: "/meni/pecenica.jpg",
    desc: ["Pečenica", "pavlaka", "sir"],
    dodaci: [
      "Pečenica 60g +150din",
      "Kulen 60g +150din",
      "Miks sireva 150g +150din",
    ],
  },
  {
    id: 2,
    title: "Indeks palačinka",
    category: "slane",
    price: 310,
    img: "/meni/index.jpg",
    desc: ["Pica šunka", "sir", "šampinjoni", "origano", "kečap"],
    dodaci: [
      "Pečenica 60g +150din",
      "Kulen 60g +150din",
      "Miks sireva 150g +150din",
    ],
  },
  {
    id: 3,
    title: "Palačinka sa kulenom",
    category: "slane",
    price: 360,
    img: "/meni/kulen.jpg",
    desc: ["Kulen", "sir", "pavlaka"],
    dodaci: [
      "Pečenica 60g +150din",
      "Kulen 60g +150din",
      "Miks sireva 150g +150din",
    ],
  },
  {
    id: 4,
    title: "Duo Miks Palačinka",
    category: "slane",
    price: 380,
    img: "/meni/duo-mix.jpg",
    desc: ["Kulen", "pečenica", "sir", "pavlaka"],
    dodaci: [
      "Pečenica 60g +150din",
      "Kulen 60g +150din",
      "Miks sireva 150g +150din",
    ],
  },
  {
    id: 5,
    title: "Mr Pačalinković Specijal",
    category: "slane",
    price: 400,
    img: "/meni/specijal.jpg",
    desc: ["Belo meso", "sir", "šampinjoni", "majonez", "pavlaka"],
    dodaci: [
      "Pečenica 60g +150din",
      "Kulen 60g +150din",
      "Miks sireva 150g +150din",
    ],
  },
  {
    id: 6,
    title: "Palačinka sa duvan čvarcima",
    category: "slane",
    price: 320,
    img: "/meni/duvan-cvarci.jpg",
    desc: ["Duvan čvarci", "miks sireva", "kečap", "majonez"],
    dodaci: [
      "Pečenica 60g +150din",
      "Kulen 60g +150din",
      "Miks sireva 150g +150din",
    ],
  },
  {
    id: 7,
    title: "Palačinka Sremački trio",
    category: "slane",
    price: 400,
    img: "/meni/sremacki-trio.jpg",
    desc: ["Pečenica", "duvan čvarci", "miks sireva"],
    dodaci: [
      "Pečenica 60g +150din",
      "Kulen 60g +150din",
      "Miks sireva 150g +150din",
    ],
  },
  {
    id: 8,
    title: "Jafa palačinka",
    category: "slatke",
    price: 290,
    img: "/meni/jafa.jpg",
    desc: ["Krem od mlečne čokolade sa notom narandže"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 9,
    title: "Rafaelo palačinka",
    category: "slatke",
    price: 290,
    img: "/meni/rafaelo.jpg",
    desc: ["Beli krem na bazi kokosa sa ukusom rafaelo kuglica"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 10,
    title: "Palačinka sa nutelom",
    category: "slatke",
    price: 300,
    img: "/meni/nutela.jpg",
    desc: ["Nutela krem na bazi lešnika"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 11,
    title: "Kit Kat palačinka",
    category: "slatke",
    price: 310,
    img: "/meni/kitket.jpg",
    desc: ["Kit Kat krem sa izdrobljenim čokoladicama"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 12,
    title: "Kinder Bueno palačinka",
    category: "slatke",
    price: 290,
    img: "/meni/kinder.jpg",
    desc: ["Kinder Bueno fil"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 13,
    title: "Palačinka sa džemom",
    category: "slatke",
    price: 210,
    img: "/meni/dzem.jpg",
    desc: ["Domaci džemovi"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 14,
    title: "Palačinka sa eurokremom",
    category: "slatke",
    price: 270,
    img: "/meni/euro-krem.jpg",
    desc: ["euro krem"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 15,
    title: "Palačinka sa kremom",
    category: "slatke",
    price: 190,
    img: "/meni/krem.jpg",
    desc: ["crno-beli krem"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 16,
    title: "Palačinka sa belim kremom",
    category: "slatke",
    price: 250,
    img: "/meni/beli-krem.jpg",
    desc: ["Beli mlečni krem na bazi lešnika"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 17,
    title: "Palačinka sa vanila kremom",
    category: "slatke",
    price: 260,
    img: "/meni/vanila.jpg",
    desc: ["Vanila krem"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 18,
    title: "Ferero Roše palačinka",
    category: "slatke",
    price: 310,
    img: "/meni/ferero.jpg",
    desc: ["Crni krem sa komadićima lešnika"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 19,
    title: "Palačinka sa džemom bez šećera",
    category: "slatke",
    price: 310,
    img: "/meni/dz-bez-secera.jpg",
    desc: ["Domaći džemovi bez dodatog šećera"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 20,
    title: "palačinka sa kremom od pistaća",
    category: "slatke",
    price: 360,
    img: "/meni/pistaci.jpg",
    desc: ["krem od pistaća"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 21,
    title: "Palačinka sa kremom i plazmom",
    category: "slatke",
    price: 210,
    img: "/meni/krem-plazma.jpg",
    desc: ["crno-beli krem sa plazmom"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 22,
    title: "Palačinka sa kremom od jagode",
    category: "slatke",
    price: 210,
    img: "/meni/jagoda-krem.jpg",
    desc: ["Mlečni krem od jagoda"],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },

  {
    id: 23,
    title: "proteinska palačinka sa kikiriki puterom i džemom",
    category: "proteinske",
    price: 360,
    img: "/meni/prot-kikiriki-puter-dz.jpg",
    desc: [
      "6 vrsta brašna, bez belog brašna i dodatog sećera",
      "15 do 25g proteina po porciji",
      "kikiriki puter i džem",
    ],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 24,
    title: "proteinska palačinka sa kremom od pistaća",
    category: "proteinske",
    price: 450,
    img: "/meni/prot-pistaci.jpg",
    desc: [
      "6 vrsta brašna, bez belog brašna i dodatog sećera",
      "15 do 25g proteina po porciji",
      "krem od pistaća",
    ],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 25,
    title: "prazna proteinska palačinka",
    category: "proteinske",
    price: 250,
    img: "/meni/prot-prazna.jpg",
    desc: [
      "6 vrsta brašna, bez belog brašna i dodatog sećera",
      "15 do 25g proteina po porciji",
    ],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 26,
    title: "proteinska palačinka sa kikiriki puterom",
    category: "proteinske",
    price: 300,
    img: "/meni/prot-kikiriki-puter.jpg",
    desc: [
      "6 vrsta brašna, bez belog brašna i dodatog sećera",
      "15 do 25g proteina po porciji",
      "kikiriki puter",
    ],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 27,
    title: "proteinska palačinka sa lešnik puterom",
    category: "proteinske",
    price: 500,
    img: "/meni/prot-lesnik-puter.jpg",
    desc: [
      "6 vrsta brašna, bez belog brašna i dodatog sećera",
      "15 do 25g proteina po porciji",
      "lešnik puter",
    ],
    dodaci: [
      "Plazma +30din",
      "Plazma u mleku +50din",
      "Preliv od karamele +60din",
      "Kokos +30din",
      "Kikiriki +60din",
      "Crveno voće miks +80din",
      "Banana +60din",
      "Čoko kuglice miks +50din",
      "Badem +80din",
      "Lešnik +80din",
      "Orasi +90din",
      "Višnje +80din",
      "Maline +100din",
    ],
  },
  {
    id: 28,
    title: "mister pačalinković tost sendvič",
    category: "sendviči",
    price: 250,
    img: "/meni/mr-tost.jpg",
    desc: [
      "Tost hleb",
      "smesa od belog mesa",
      "četiri vrste sira",
      "pavlaka",
      "majonez",
    ],
    dodaci: [
      "Pečenica 60g +150din",
      "Kulen 60g +150din",
      "Miks sireva 150g +150din",
    ],
  },
  {
    id: 29,
    title: "tost sendvič",
    category: "sendviči",
    price: 200,
    img: "/meni/tost.jpg",
    desc: ["Tost hleb", "puter", "pica šunka", "četiri vrste sira"],
    dodaci: [
      "Pečenica 60g +150din",
      "Kulen 60g +150din",
      "Miks sireva 150g +150din",
    ],
  },
  {
    id: 30,
    title: "koka-kola",
    category: "piće",
    price: 120,
    img: "/meni/kola.jpg",
    desc: ["koka-kola"],
    dodaci: [],
  },
  {
    id: 31,
    title: "koka-kola zero",
    category: "piće",
    price: 120,
    img: "/meni/kola-zero.jpg",
    desc: ["koka-kola zero"],
    dodaci: [],
  },
  {
    id: 32,
    title: "fanta narandža",
    category: "piće",
    price: 120,
    img: "/meni/fanta.jpg",
    desc: ["fanta narandža"],
    dodaci: [],
  },
  {
    id: 33,
    title: "sprajt",
    category: "piće",
    price: 120,
    img: "/meni/sprajt.jpg",
    desc: ["sprajt"],
    dodaci: [],
  },
  {
    id: 34,
    title: "šveps mojito",
    category: "piće",
    price: 120,
    img: "/meni/sch-mojito.jpg",
    desc: ["šveps mojito"],
    dodaci: [],
  },
  {
    id: 35,
    title: "rosa",
    category: "piće",
    price: 90,
    img: "/meni/rosa-neg.jpg",
    desc: ["rosa"],
    dodaci: [],
  },
  {
    id: 36,
    title: "rosa gazirana",
    category: "piće",
    price: 90,
    img: "/meni/rosa-gaz.jpg",
    desc: ["rosa gazirana"],
    dodaci: [],
  },
  {
    id: 37,
    title: "next limunada",
    category: "piće",
    price: 140,
    img: "/meni/next-lim.jpg",
    desc: ["next limunada"],
    dodaci: [],
  },
];

export const radnoVr = [
  { dan: "Ponedeljak", sat: "12:00 do 22:45" },
  { dan: "Utorak", sat: "12:00 do 22:45" },
  { dan: "Sreda", sat: "12:00 do 22:45" },
  { dan: "Četvrtak", sat: "12:00 do 22:45" },
  { dan: "Petak", sat: "12:00 do 22:45" },
  { dan: "Subota", sat: "12:00 do 22:45" },
  { dan: "Nedelja", sat: "12:00 do 22:45" },
];

export const floatingLinks = [
  {
    title: "Alideda",
    icon: (
      <Image
        src='/logo/alideda-emb.png'
        width={20}
        height={20}
        alt='Alideda Logo'
      />
    ),
    href: "https://www.alideda.rs/mister-pacalinkovic-dostava-sremska-mitrovica",
  },
  {
    title: "Wolt",
    icon: (
      <Image
        src='/logo/wolt-logo.png'
        width={20}
        height={20}
        alt='Wolt Logo'
        className='font-lg'
      />
    ),
    href: "https://wolt.com/sr/srb/sremska-mitrovica/restaurant/mister-paalinkovi",
  },
  {
    title: "Facebook",
    icon: (
      <Image
        src='/logo/brand-facebook.svg'
        width={30}
        height={30}
        alt='Facebook Logo'
        className='font-lg'
      />
    ),
    href: "https://www.facebook.com/p/Palacinkarnica-Mister-Pacalinkovic-100068327874172/",
  },
  {
    title: "Instagram",
    icon: (
      <Image
        src='/logo/brand-instagram.svg'
        width={20}
        height={20}
        alt='Instagram Logo'
        className='font-lg'
      />
    ),
    href: "https://www.instagram.com/p/BfyUoFtAwog/",
  },
  {
    title: "Google Mape",
    icon: (
      <Image
        src='/logo/map-pin.svg'
        width={20}
        height={20}
        alt='Google Mape'
        className='font-lg'
      />
    ),
    href: "https://www.google.com/maps/place/Mister+Pa%C4%8Dalinkovi%C4%87/@44.9669718,19.6094189,15z/data=!4m6!3m5!1s0x475ba53e94ecba47:0x86dc485657b2d93f!8m2!3d44.9669718!4d19.6094189!16s%2Fg%2F11tfb7l9lj?entry=ttu",
  },
  {
    title: "Poziv",
    icon: (
      <Image
        src='/logo/phone-call.svg'
        width={20}
        height={20}
        alt='Telefon'
        className='font-lg'
      />
    ),
    href: "tel:+381645574037",
  },
];

export const sidebarSocialIcons = [
  {
    href: "tel:+381645574037",
    icon: <FaPhoneVolume className='text-lg' />,
  },
  {
    href: "https://www.alideda.rs/mister-pacalinkovic-dostava-sremska-mitrovica",
    icon: (
      <Image
        src='/logo/alideda-emb.png'
        width={20}
        height={20}
        alt='Alideda Logo'
      />
    ),
  },
  {
    href: "https://wolt.com/sr/srb/sremska-mitrovica/restaurant/mister-paalinkovi",
    icon: (
      <Image
        src='/logo/wolt-logo.png'
        width={20}
        height={20}
        alt='Wolt Logo'
        className='font-lg '
      />
    ),
  },
  {
    href: "https://www.facebook.com/p/Palacinkarnica-Mister-Pacalinkovic-100068327874172/",
    icon: <MdFacebook className='text-xl ' />,
  },
  {
    href: "https://www.instagram.com/p/BfyUoFtAwog/",
    icon: <AiFillInstagram className='text-xl' />,
  },
  {
    href: "https://www.google.com/maps/place/Mister+Pa%C4%8Dalinkovi%C4%87/@44.9669718,19.6094189,15z/data=!4m6!3m5!1s0x475ba53e94ecba47:0x86dc485657b2d93f!8m2!3d44.9669718!4d19.6094189!16s%2Fg%2F11tfb7l9lj?entry=ttu",
    icon: <FaLocationDot className='text-lg ' />,
  },
];
