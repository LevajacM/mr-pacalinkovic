import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneVolume } from 'react-icons/fa6';

export const links = [
  { href: '/', label: 'Početna' },
  { href: '/meni', label: 'Meni' },
  { href: '/kontakt', label: 'Kontakt' },
];

export const socialIcons = [
  {
    href: 'https://www.facebook.com/p/Palacinkarnica-Mister-Pacalinkovic-100068327874172/',
    icon: <MdFacebook />,
  },
  {
    href: 'https://www.instagram.com/p/BfyUoFtAwog/',
    icon: <AiFillInstagram />,
  },
  {
    href: 'https://www.google.com/maps/place/Mister+Pa%C4%8Dalinkovi%C4%87/@44.9669718,19.6094189,15z/data=!4m6!3m5!1s0x475ba53e94ecba47:0x86dc485657b2d93f!8m2!3d44.9669718!4d19.6094189!16s%2Fg%2F11tfb7l9lj?entry=ttu',
    icon: <FaLocationDot />,
  },
];

const dodaciSlane = [
  { name: 'Pečenica 60g', price: '150din' },
  { name: 'Kulen 60g', price: '150din' },
  { name: 'Miks sireva 150g', price: '150din' },
];

const dodaciSlatke = [
  { name: 'Plazma', price: '30din' },
  { name: 'Plazma u mleku', price: '50din' },
  { name: 'Preliv od karamele', price: '60din' },
  { name: 'Kokos', price: '30din' },
  { name: 'Kikiriki', price: '60din' },
  { name: 'Crveno voće miks', price: '80din' },
  { name: 'Banana', price: '60din' },
  { name: 'Čoko kuglice miks', price: '50din' },
  { name: 'Badem', price: '80din' },
  { name: 'Lešnik', price: '80din' },
  { name: 'Orasi', price: '90din' },
  { name: 'Višnje', price: '80din' },
  { name: 'Maline', price: '100din' },
];

export const meni = [
  {
    id: 1,
    title: 'Palačinka sa pečenicom',
    category: 'slane',
    price: 350,
    img: '/meni/pecenica.jpg',
    desc: ['Pečenica', 'pavlaka', 'sir'],
    opis1:
      'Neodoljiva palačinka sa dimljenom pečenicom, pavlakom i sirom — savršen spoj ukusa za ljubitelje slanih specijaliteta.',
    opis2:
      'Topla, hrskava i kremasta palačinka koja spaja bogat ukus pečenice i nežnost pavlake. Idealna za dobar početak dana.',
    dodaci: dodaciSlane,
  },
  {
    id: 2,
    title: 'Indeks palačinka',
    category: 'slane',
    price: 310,
    img: '/meni/index.jpg',
    desc: ['Pica šunka', 'sir', 'šampinjoni', 'origano', 'kečap'],
    opis1:
      'Inspirisana legendarnim indeks sendvičem, ova palačinka nudi savršen balans šunke, sira, šampinjona i origana.',
    opis2:
      'Zatvori oči i oseti poznati miris pice u obliku palačinke — to je naš Indeks klasik koji nikad ne razočara.',
    dodaci: dodaciSlane,
  },
  {
    id: 3,
    title: 'Palačinka sa kulenom',
    category: 'slane',
    price: 360,
    img: '/meni/kulen.jpg',
    desc: ['Kulen', 'sir', 'pavlaka'],
    opis1:
      'Pikantna i sočna palačinka sa kulenom, sirom i pavlakom za prave gurmane koji vole jak i bogat ukus.',
    opis2:
      'Kulen u savršenom zagrljaju sa sirom i pavlakom — kombinacija koja će probuditi sva čula.',
    dodaci: dodaciSlane,
  },
  {
    id: 4,
    title: 'Duo Miks Palačinka',
    category: 'slane',
    price: 380,
    img: '/meni/duo-mix.jpg',
    desc: ['Kulen', 'pečenica', 'sir', 'pavlaka'],
    opis1:
      'Kulen i pečenica u savršenom tandemu, sa sirom i pavlakom, stvaraju neodoljivi miks punog ukusa.',
    opis2:
      'Za one koji ne žele da biraju između kulena i pečenice — Duo Miks donosi najbolje od oba sveta.',
    dodaci: dodaciSlane,
  },
  {
    id: 5,
    title: 'Mr Pačalinković Specijal',
    category: 'slane',
    price: 400,
    img: '/meni/specijal.jpg',
    desc: ['Belo meso', 'sir', 'šampinjoni', 'majonez', 'pavlaka'],
    opis1:
      'Naš najpoznatiji specijalitet — kombinacija belog mesa, sira i šampinjona u kremastom sosu od majoneza i pavlake.',
    opis2:
      'Svaki zalogaj je pun kremaste harmonije i savršeno začinjenih sastojaka. Probaj specijal koji svi hvale!',
    dodaci: dodaciSlane,
  },
  {
    id: 6,
    title: 'Palačinka sa duvan čvarcima',
    category: 'slane',
    price: 320,
    img: '/meni/duvan-cvarci.jpg',
    desc: ['Duvan čvarci', 'miks sireva', 'kečap', 'majonez'],
    opis1:
      'Hrskavi duvan čvarci i bogat miks sireva čine ovu palačinku pravim delikatesom domaće kuhinje.',
    opis2:
      'Autentičan ukus tradicije u modernom obliku palačinke — savršen spoj topline i punog ukusa.',
    dodaci: dodaciSlane,
  },
  {
    id: 7,
    title: 'Palačinka Sremački trio',
    category: 'slane',
    price: 400,
    img: '/meni/sremacki-trio.jpg',
    desc: ['Pečenica', 'duvan čvarci', 'miks sireva'],
    opis1:
      'Tri heroja sremačke kuhinje u jednoj palačinki — pečenica, duvan čvarci i sirevi punog ukusa.',
    opis2:
      'Rustičan šarm i bogat ukus u svakom zalogaju. Sremački trio spaja tradiciju i užitak.',
    dodaci: dodaciSlane,
  },
  {
    id: 8,
    title: 'Jafa palačinka',
    category: 'slatke',
    price: 290,
    img: '/meni/jafa.jpg',
    desc: ['Krem od mlečne čokolade sa notom narandže'],
    opis1:
      'Nežna palačinka sa kremom od čokolade i narandže — ukus koji podseća na legendarni Jafa kolač.',
    opis2:
      'Osvežavajuća nota narandže i bogat čokoladni krem stvaraju savršenu harmoniju slatkoće.',
    dodaci: dodaciSlatke,
  },
  {
    id: 9,
    title: 'Rafaelo palačinka',
    category: 'slatke',
    price: 290,
    img: '/meni/rafaelo.jpg',
    desc: ['Beli krem na bazi kokosa sa ukusom rafaelo kuglica'],
    opis1:
      'Lagani krem od kokosa u mekoj palačinki — pravi raj za ljubitelje Rafaelo ukusa.',
    opis2:
      'Oseti miris kokosa i mlečne slasti u savršeno izbalansiranoj rafaelo kombinaciji.',
    dodaci: dodaciSlatke,
  },
  {
    id: 10,
    title: 'Palačinka sa nutelom',
    category: 'slatke',
    price: 300,
    img: '/meni/nutela.jpg',
    desc: ['Nutela krem na bazi lešnika'],
    opis1:
      'Klasik koji nikad ne izlazi iz mode — palačinka bogato premazana neodoljivom nutelom.',
    opis2:
      'Savršen balans mekanog testa i kremastog lešnikovog ukusa koji osvaja svakog sladokusca.',
    dodaci: dodaciSlatke,
  },
  {
    id: 11,
    title: 'Kit Kat palačinka',
    category: 'slatke',
    price: 310,
    img: '/meni/kitket.jpg',
    desc: ['Kit Kat krem sa izdrobljenim čokoladicama'],
    opis1:
      'Hrskava i čokoladna eksplozija ukusa — Kit Kat palačinka donosi zabavu u svakom zalogaju.',
    opis2:
      'Spoj kremastog i hrskavog, idealan za one koji vole čokoladne avanture.',
    dodaci: dodaciSlatke,
  },
  {
    id: 12,
    title: 'Kinder Bueno palačinka',
    category: 'slatke',
    price: 290,
    img: '/meni/kinder.jpg',
    desc: ['Kinder Bueno fil'],
    opis1:
      'Neodoljiva palačinka punjena kremom po uzoru na Kinder Bueno — kremasta, blaga i savršeno slatka.',
    opis2:
      'Ukus detinjstva u elegantnoj formi palačinke. Lagana i bogata u isto vreme.',
    dodaci: dodaciSlatke,
  },
  {
    id: 13,
    title: 'Palačinka sa džemom',
    category: 'slatke',
    price: 210,
    img: '/meni/dzem.jpg',
    desc: ['Domaci džemovi'],
    opis1:
      'Jednostavna i savršena — domaći džem u mekanoj palačinki, kao iz bakine kuhinje.',
    opis2:
      'Slatkoća domaćih džemova donosi toplinu i nostalgiju u svakom zalogaju.',
    dodaci: dodaciSlatke,
  },
  {
    id: 14,
    title: 'Palačinka sa eurokremom',
    category: 'slatke',
    price: 270,
    img: '/meni/euro-krem.jpg',
    desc: ['euro krem'],
    opis1:
      'Neodoljivi spoj mlečnog i crnog krema u palačinki koja se topi u ustima.',
    opis2:
      'Za sve koji vole klasičan ukus eurokrema u jednostavnom, a bogatom desertu.',
    dodaci: dodaciSlatke,
  },
  {
    id: 15,
    title: 'Palačinka sa kremom',
    category: 'slatke',
    price: 190,
    img: '/meni/krem.jpg',
    desc: ['crno-beli krem'],
    opis1:
      'Crno-beli krem daje ovoj palačinki posebnu dozu kontrasta i slatkog zadovoljstva.',
    opis2:
      'Jednostavna, a savršeno slatka — uživanje u svakom sloju kremaste kombinacije.',
    dodaci: dodaciSlatke,
  },
  {
    id: 16,
    title: 'Palačinka sa belim kremom',
    category: 'slatke',
    price: 250,
    img: '/meni/beli-krem.jpg',
    desc: ['Beli mlečni krem na bazi lešnika'],
    opis1:
      'Kremasta i nežna palačinka sa belim kremom od lešnika koja osvaja svojom finoćom.',
    opis2:
      'Savršeno lagan desert koji oduševljava ukusom mlečne slasti i lešnika.',
    dodaci: dodaciSlatke,
  },
  {
    id: 17,
    title: 'Palačinka sa vanila kremom',
    category: 'slatke',
    price: 260,
    img: '/meni/vanila.jpg',
    desc: ['Vanila krem'],
    opis1:
      'Klasičan ukus vanile pretvoren u savršeno kremastu palačinku koja miriše na detinjstvo.',
    opis2:
      'Nežna, mirisna i lagana palačinka za one koji vole profinjene slatke note.',
    dodaci: dodaciSlatke,
  },
  {
    id: 18,
    title: 'Ferero Roše palačinka',
    category: 'slatke',
    price: 310,
    img: '/meni/ferero.jpg',
    desc: ['Crni krem sa komadićima lešnika'],
    opis1:
      'Bogata palačinka inspirisana Ferero Roše kuglicama — čokolada i lešnik u savršenom spoju.',
    opis2:
      'Luksuzan desert za posebne trenutke. Intenzivan, kremast i nezaboravan.',
    dodaci: dodaciSlatke,
  },
  {
    id: 19,
    title: 'Palačinka sa džemom bez šećera',
    category: 'slatke',
    price: 310,
    img: '/meni/dz-bez-secera.jpg',
    desc: ['Domaći džemovi bez dodatog šećera'],
    opis1:
      'Zdrava varijanta omiljenog klasika — domaći džem bez dodatog šećera u laganoj palačinki.',
    opis2:
      'Prirodna slatkoća i bogat ukus voća, bez griže savesti. Idealno za ljubitelje balansirane ishrane.',
    dodaci: dodaciSlatke,
  },
  {
    id: 20,
    title: 'Palačinka sa kremom od pistaća',
    category: 'slatke',
    price: 360,
    img: '/meni/pistaci.jpg',
    desc: ['krem od pistaća'],
    opis1:
      'Pistacije u svojoj najlepšoj formi — kremasti, aromatični i nežni u savršenom testu.',
    opis2:
      'Elegantna slatka palačinka sa kremom od pistaća za prave sladokusce.',
    dodaci: dodaciSlatke,
  },
  {
    id: 21,
    title: 'Palačinka sa kremom i plazmom',
    category: 'slatke',
    price: 210,
    img: '/meni/krem-plazma.jpg',
    desc: ['crno-beli krem sa plazmom'],
    opis1:
      'Spoj kremastog crno-belog fila i neodoljive plazme stvara savršenu kombinaciju poznatog ukusa.',
    opis2:
      'Palačinka koja vraća osmeh na lice — jednostavna, a puna domaće topline.',
    dodaci: dodaciSlatke,
  },
  {
    id: 22,
    title: 'Palačinka sa kremom od jagode',
    category: 'slatke',
    price: 210,
    img: '/meni/jagoda-krem.jpg',
    desc: ['Mlečni krem od jagoda'],
    opis1:
      'Slatka i osvežavajuća palačinka sa kremom od jagoda, savršena za sve ljubitelje voćnih deserta.',
    opis2:
      'Voćna eksplozija u svakom zalogaju — jagoda i mlečni krem u nežnom testu.',
    dodaci: dodaciSlatke,
  },
  {
    id: 23,
    title: 'Proteinska palačinka sa kikiriki puterom i džemom',
    category: 'proteinske',
    price: 360,
    img: '/meni/prot-kikiriki-puter-dz.jpg',
    desc: [
      '6 vrsta brašna',
      'bez belog brašna i dodatog sećera',
      '15 do 25g proteina po porciji',
      'kikiriki puter i džem',
    ],
    opis1:
      'Zdrava, bogata proteinima i puna ukusa — kikiriki puter i džem u savršenoj ravnoteži.',
    opis2:
      'Energetska bomba sa zdravim sastojcima za one koji žele užitak bez griže savesti.',
    dodaci: dodaciSlatke,
  },
  {
    id: 24,
    title: 'Proteinska palačinka sa kremom od pistaća',
    category: 'proteinske',
    price: 450,
    img: '/meni/prot-pistaci.jpg',
    desc: [
      '6 vrsta brašna',
      'bez belog brašna i dodatog sećera',
      '15 do 25g proteina po porciji',
      'krem od pistaća',
    ],
    opis1:
      'Savršena kombinacija zdravog i luksuznog — proteini i pistaći u kremastoj harmoniji.',
    opis2:
      'Ukus koji spaja fitnes i uživanje. Lagana, hranljiva i neverovatno ukusna palačinka.',
    dodaci: dodaciSlatke,
  },
  {
    id: 25,
    title: 'Prazna proteinska palačinka',
    category: 'proteinske',
    price: 250,
    img: '/meni/prot-prazna.jpg',
    desc: [
      '6 vrsta brašna',
      'bez belog brašna i dodatog sećera',
      '15 do 25g proteina po porciji',
    ],
    opis1:
      'Minimalistička proteinska palačinka za one koji vole jednostavnost i čistu energiju.',
    opis2:
      'Zdrava osnova koju možeš kombinovati po želji — lagana, hranljiva i svestrana.',
    dodaci: dodaciSlatke,
  },
  {
    id: 26,
    title: 'Proteinska palačinka sa kikiriki puterom',
    category: 'proteinske',
    price: 300,
    img: '/meni/prot-kikiriki-puter.jpg',
    desc: [
      '6 vrsta brašna',
      'bez belog brašna i dodatog sećera',
      '15 do 25g proteina po porciji',
      'kikiriki puter',
    ],
    opis1:
      'Proteinska poslastica sa bogatim ukusom kikiriki putera i punim hranljivih vrednosti.',
    opis2:
      'Idealna za aktivne ljude koji žele zdravo, ukusno i zasitno uživanje.',
    dodaci: dodaciSlatke,
  },
  {
    id: 27,
    title: 'Proteinska palačinka sa lešnik puterom',
    category: 'proteinske',
    price: 500,
    img: '/meni/prot-lesnik-puter.jpg',
    desc: [
      '6 vrsta brašna',
      'bez belog brašna i dodatog sećera',
      '15 do 25g proteina po porciji',
      'lešnik puter',
    ],
    opis1:
      'Luksuzna proteinska palačinka sa puterom od lešnika — energija, ukus i zdravlje u jednom.',
    opis2:
      'Kremasta, hranljiva i savršeno izbalansirana palačinka za sladokusce koji paze na ishranu.',
    dodaci: dodaciSlatke,
  },
  {
    id: 28,
    title: 'Mr Pačalinković tost sendvič',
    category: 'sendvici',
    price: 250,
    img: '/meni/mr-tost.jpg',
    desc: [
      'Tost hleb',
      'smesa od belog mesa',
      'četiri vrste sira',
      'pavlaka',
      'majonez',
    ],
    opis1:
      'Specijalni tost sa smesom od belog mesa i četiri vrste sira — pravi kremasti užitak.',
    opis2:
      'Zlatno pečen tost sa savršeno topljenim sirom i domaćim sosom. Ukus koji osvaja.',
    dodaci: dodaciSlane,
  },
  {
    id: 29,
    title: 'Tost sendvič',
    category: 'sendvici',
    price: 200,
    img: '/meni/tost.jpg',
    desc: ['Tost hleb', 'puter', 'pica šunka', 'četiri vrste sira'],
    opis1:
      'Klasičan tost sendvič sa šunkom, puterom i mešavinom sireva — jednostavno savršen.',
    opis2:
      'Topao, mirisan i hrskav sendvič koji uvek pogađa pravo mesto — klasik koji nikad ne razočara.',
    dodaci: dodaciSlane,
  },
  {
    id: 30,
    title: 'Koka-kola',
    category: 'pice',
    price: 120,
    img: '/meni/kola.jpg',
    desc: ['koka-kola'],
    opis1:
      'Osvežavajuća Koka-kola koja savršeno upotpunjuje svaku slanu palačinku — posebno onu sa pečenicom.',
    opis2:
      'Idealna za balans slanih ukusa, Koka-kola donosi pravi kontrast uz bilo koji specijalitet sa pavlakom ili sirom.',
    dodaci: [],
  },
  {
    id: 31,
    title: 'Koka-kola Zero',
    category: 'pice',
    price: 120,
    img: '/meni/kola-zero.jpg',
    desc: ['koka-kola zero'],
    opis1:
      'Kola bez šećera koja ne pravi kompromis sa ukusom — odličan par uz proteinske palačinke.',
    opis2:
      'Lagani i sveži izbor koji osvežava nakon svake slatke palačinke, a posebno uz pistacije ili lešnik puter.',
    dodaci: [],
  },
  {
    id: 32,
    title: 'Fanta narandža',
    category: 'pice',
    price: 120,
    img: '/meni/fanta.jpg',
    desc: ['fanta narandža'],
    opis1:
      'Voćna svežina Fante idealno prati lagane palačinke sa džemom ili vanilom.',
    opis2:
      'Osvežavajuća nota narandže koja se divno slaže sa svilenkastim kremovima i slatkim punjenjima.',
    dodaci: [],
  },
  {
    id: 33,
    title: 'Sprajt',
    category: 'pice',
    price: 120,
    img: '/meni/sprajt.jpg',
    desc: ['sprajt'],
    opis1:
      'Blaga citrusna svežina koja razbija slatkoću i čini da svaki zalogaj palačinke bude kao prvi.',
    opis2:
      'Savršen pratilac uz slatke klasike poput Nutele ili Rafaela — osvežava bez težine.',
    dodaci: [],
  },
  {
    id: 34,
    title: 'Šveps mojito',
    category: 'pice',
    price: 120,
    img: '/meni/sch-mojito.jpg',
    desc: ['šveps mojito'],
    opis1:
      'Šveps Mojito donosi aromu mente i limete koja se savršeno uklapa uz proteinske palačinke.',
    opis2:
      'Lagani citrusni twist koji osvežava posle svake bogate palačinke sa kremom ili voćnim punjenjem.',
    dodaci: [],
  },
  {
    id: 35,
    title: 'Rosa',
    category: 'pice',
    price: 90,
    img: '/meni/rosa-neg.jpg',
    desc: ['rosa'],
    opis1:
      'Prirodna negazirana voda koja čisti nepce i ističe bogat ukus svake palačinke.',
    opis2:
      'Savršen izbor uz bilo koji desert — neutralna i nežna, da uživaš samo u ukusu palačinke.',
    dodaci: [],
  },
  {
    id: 36,
    title: 'Rosa gazirana',
    category: 'pice',
    price: 90,
    img: '/meni/rosa-gaz.jpg',
    desc: ['rosa gazirana'],
    opis1:
      'Blago gazirana Rosa donosi osveženje uz slane palačinke poput Duo Miks ili Sremački trio.',
    opis2:
      'Idealna za one koji vole mehuriće uz zalogaje bogate pavlakom i sirom — diskretno i fino.',
    dodaci: [],
  },
  {
    id: 37,
    title: 'Next limunada',
    category: 'pice',
    price: 140,
    img: '/meni/next-lim.jpg',
    desc: ['next limunada'],
    opis1:
      'Voćno-kiselkasta limunada koja daje savršen kontrast uz palačinke sa kremom ili plazmom.',
    opis2:
      'Lagani, letnji ukus koji se odlično slaže sa slatkim punjenjima od vanile i čokolade.',
    dodaci: [],
  },
];

export const radnoVr = [
  { dan: 'Ponedeljak', sat: '12:00 do 22:45' },
  { dan: 'Utorak', sat: '12:00 do 22:45' },
  { dan: 'Sreda', sat: '12:00 do 22:45' },
  { dan: 'Četvrtak', sat: '12:00 do 22:45' },
  { dan: 'Petak', sat: '12:00 do 22:45' },
  { dan: 'Subota', sat: '12:00 do 22:45' },
  { dan: 'Nedelja', sat: '12:00 do 22:45' },
];

export const sidebarSocialIcons = [
  {
    href: 'tel:+381645574037',
    icon: <FaPhoneVolume className='text-lg' />,
  },
  {
    href: 'https://www.facebook.com/p/Palacinkarnica-Mister-Pacalinkovic-100068327874172/',
    icon: <MdFacebook className='text-xl ' />,
  },
  {
    href: 'https://www.instagram.com/p/BfyUoFtAwog/',
    icon: <AiFillInstagram className='text-xl' />,
  },
  {
    href: 'https://www.google.com/maps/place/Mister+Pa%C4%8Dalinkovi%C4%87/@44.9669718,19.6094189,15z/data=!4m6!3m5!1s0x475ba53e94ecba47:0x86dc485657b2d93f!8m2!3d44.9669718!4d19.6094189!16s%2Fg%2F11tfb7l9lj?entry=ttu',
    icon: <FaLocationDot className='text-lg ' />,
  },
];
