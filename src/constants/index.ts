import Icons from "@/components/icons";
import { FaGamepad, FaTrophy } from 'react-icons/fa';
import { MdBolt, MdFastfood } from 'react-icons/md'; // Fastfood icon for snacks
import { IoMdPeople } from 'react-icons/io';
import { GiConsoleController, GiCrown } from 'react-icons/gi'; // ConsoleController for high-end gaming equipment

export const perks = [
    {
        icon: FaGamepad,
        title: "Spela i timmar",
        info: "Njut av ett stort urval av de senaste spelen och spela i timmar!",
    },
    {
        icon: MdFastfood, // Updated snack icon
        title: "Snacks & Dryck",
        info: "Fyll på med utsökta snacks och drycker, allt tillgängligt i vårt kiosk.",
    },
    {
        icon: FaTrophy,
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
        icon: IoMdPeople, // Updated icon for playing with friends
        title: "Spela med vänner",
        info: "Ta med dina vänner och familj för multiplayer-spel, LAN-partyn eller gruppturneringar i en rolig, konkurrenskraftig miljö.",
    },
    {
        icon: GiConsoleController, // More gaming-oriented icon for high-end equipment
        title: "Utrustning av högsta klass",
        info: "Spela med högupplösta skärmar, mekaniska tangentbord och surround-ljudheadset, sponsrat av Corsair för en premium spelupplevelse.",
    },
];

export const pricingCards = [
    {
        title: "VIPGIBB",
        description: "Njut av exklusiv spelupplevelse.",
        price: "300 kr",
        duration: "",
        highlight: "Viktiga funktioner",
        features: ["3 Red bull", "Popcorn/snacks", "Vip-rum"],
    },
    {
        title: "DROP IN",// drop in
        description: "Perfek för spontan spelglädje.",
        price: "SPELDEAL",
        duration: "månad",
        highlight: "Viktiga funktioner",
        features: ["1h - 35 kr", "3h - 95 kr", "5h - 130 kr", "10h - 200 kr", "20h - 340 kr"],
    },
    {
        title: "BARNKALAS",
        description: "Spel, godis & minnen för barn!",
        price: "329 Kr",
        duration: "månad",
        highlight: "Allt i Starter, plus",
        buttonText: "Boka nu ->",
        features: ["3h speltid", "Godispåse", "Snacks/popcorn", "Korv med bröd & Dricka"],
     
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
