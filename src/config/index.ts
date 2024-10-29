import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Xtream E-sport Arena - Bästa Spelupplevelsen",
        template: `%s | XtreamGaming`
    },
    description: "Xtream eSport Arena är en toppmodern e-sportarena som erbjuder en unik spelupplevelse för både amatörer och proffs. Spela dina favoritspel med högsta kvalitet och utmana andra i en energifylld miljö. Besök oss idag!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.png",
                href: "/icons/favicon.png",
            }
        ]
    },
    openGraph: {
        title: "Xtream E-sport Arena - Bästa Spelupplevelsen",
        description:"Xtream eSport Arena är en toppmodern e-sportarena som erbjuder en unik spelupplevelse för både amatörer och proffs. Spela dina favoritspel med högsta kvalitet och utmana andra i en energifylld miljö. Besök oss idag!",
        images: [
            {
                url: "/assets/logo.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Xtream E-sport Arena - Bästa Spelupplevelsen",
        description: "Xtream eSport Arena är en toppmodern e-sportarena som erbjuder en unik spelupplevelse för både amatörer och proffs. Spela dina favoritspel med högsta kvalitet och utmana andra i en energifylld miljö. Besök oss idag!",
        images: [
            {
                url: "/assets/logo.png",
            }
        ]
    },
    metadataBase: new URL("https://astra-app.vercel.app"),
};
