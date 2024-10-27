import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Xtream E-sport Arena - Bästa Spelupplevelsen",
        template: `%s | XtreamGaming`
    },
    description: "Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.png",
                href: "/icons/favicon.png",
            }
        ]
    },
    openGraph: {
        title: "Astra - AI Powered Website Builder",
        description: "Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/logo.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Astra - AI Powered Website Builder",
        description: "Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/logo.png",
            }
        ]
    },
    metadataBase: new URL("https://astra-app.vercel.app"),
};
