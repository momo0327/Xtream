import Icons from "@/components/icons";
import { FaGamepad, FaCoffee, FaTrophy } from 'react-icons/fa';
import { MdBolt, MdPalette, MdMonitor,  } from 'react-icons/md';
import { IoIosRocket, IoMdPeople } from 'react-icons/io';
import { BsFillGearFill } from 'react-icons/bs';
import { GiHotMeal, GiGearStick, GiCrown } from 'react-icons/gi'; // HotMeal for snacks


export const perks = [
    {
        icon: FaGamepad ,
        title: "Spela i timmar",
        info: "Njut av ett stort urval av de senaste spelen och spela så länge du vill.",
    },
    {
        icon: GiHotMeal,
        title: "Snacks & Dryck",
        info: "Fyll på med utsökta snacks och drycker, allt tillgängligt i vårt kafé.",
    },
    {
        icon: FaTrophy ,
        title: "Gå med i turneringar",
        info: "Tävla i regelbundna turneringar eller spela avslappnade multiplayer-sessioner med vänner.",
    },
];

export const features = [
    {
        icon: MdBolt,
        title: "Snabb uppstart",
        info: "Hoppa rakt in i actionen. Logga in med ditt konto eller använd vårt för att komma igång snabbt med vilket spel som helst.",
    },
    {
        icon: MdPalette,
        title: "Spela med vänner",
        info: "Ta med dina vänner och familj för multiplayer-spel, LAN-partyn eller gruppturneringar i en rolig, konkurrenskraftig miljö.",
    },
    {
        icon: BsFillGearFill,
        title: "Utrustning av högsta klass",
        info: "Spela på högupplösta skärmar, mekaniska tangentbord, precisionmöss och surround-ljudheadset för bästa upplevelse.",
    },
    {
        icon: MdMonitor,
        title: "Redo för e-sport",
        info: "Tävla i veckoturneringar eller vänskapsmatcher. Testa dina färdigheter och vinn priser i vår e-sportzon.",
    },
    {
        icon: IoMdPeople ,
        title: "Personliga profiler",
        info: "Logga in med ditt konto för att spara speldata, anpassa inställningar och följa dina prestationer på våra system.",
    },
    {
        icon: IoIosRocket,
        title: "Snack Bar & Förfriskningar",
        info: "Fyll på med olika snacks och drycker på plats för att hålla dig igång genom långa spelsessioner.",
    },
];
export const pricingCards = [
    {
        title: "Starter",
        description: "Perfekt för att prova plura",
        price: "Gratis",
        duration: "",
        highlight: "Viktiga funktioner",
        buttonText: "Börja gratis",
        features: ["Begränsade projekt", "1 Teammedlem", "Grundläggande funktioner"],
        priceId: "",
    },
    {
        title: "Unlimited Saas",
        description: "Det ultimata byråkitet",
        price: "199 $",
        duration: "månad",
        highlight: "Viktiga funktioner",
        buttonText: "Uppgradera till Pro",
        features: ["Obegränsade projekt", "5 Teammedlemmar", "Avancerade designverktyg", "Anpassningsbar domän"],
        priceId: "price_1OYxkqFj9oKEERu1KfJGWxgN",
    },
    {
        title: "Enterprise",
        description: "För seriösa byråägare",
        price: "399 $",
        duration: "månad",
        highlight: "Allt i Starter, plus",
        buttonText: "Uppgradera till Enterprise",
        features: ["Obegränsade projekt", "Obegränsat antal Teammedlemmar", "Anpassad branding", "Prioriterad support (24/7)"],
        priceId: "price_1OYxkqFj9oKEERu1NbKUxXxN",
    },
];

export const bentoCards = [
    {
        title: 'Börja med inspiration',
        info: 'Bläddra igenom vårt stora bibliotek med fördesignade mallar eller ladda upp dina egna bilder.',
        imgSrc: '/assets/bento-1.svg', // Lightbulb or Inspiration icon
        alt: 'Inspiration för webbskapande'
    },
    {
        title: 'AI hjälper din vision',
        info: 'Vår intelligenta AI anpassar förslag och funktioner baserat på dina mål.',
        imgSrc: '/assets/bento1.svg', // AI Assistant icon
        alt: 'AI webbskaparassistent'
    },
    {
        title: 'Dra och släpp anpassning',
        info: 'Anpassa enkelt din webbplats med vår intuitiva dra-och-släpp-redigerare.',
        imgSrc: '/assets/bento1.svg', // Drag and Drop icon or hand editing a website
        alt: 'Anpassa webbplats med dra och släpp'
    },
    {
        title: 'Lansera & Skina online',
        info: 'Publicera din webbplats med ett enda klick och ta ditt varumärke till världen.',
        imgSrc: '/assets/bento1.svg', // Rocket launching or website going live
        alt: 'Webbplatslansering och publicering'
    },
];

export const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "Jag har aldrig sett något liknande förut. Det är fantastiskt. Jag älskar det.",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "Jag vet inte vad jag ska säga. Jag är mållös. Detta är fantastiskt.",
    },
    {
        name: "John",
        username: "@john",
        body: "Jag är mållös. Detta är fantastiskt. Jag älskar det.",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "Jag är mållös. Detta är fantastiskt. Jag älskar det.",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "Jag är mållös. Detta är fantastiskt. Jag älskar det.",
    },
    {
        name: "James",
        username: "@james",
        body: "Jag är mållös. Detta är fantastiskt. Jag älskar det.",
    },
];
