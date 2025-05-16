import "@/style/globals.css";
import { satoshi } from "@/lib/font";

const siteUrl = new URL(process.env.SITE_URL || 'http://localhost:3000');

// Define default metadata that applies to all pages
export const metadata = {
    // Basic metadata
    title: {
        template: "%s | SelaMonti",
        default: "SelaMonti | Explore Art, Science & History Virtually",
    },
    description: "Experience art, science and artifacts from around the world in our interactive digital museum. Explore 3D artifacts, and curated collections.",

    // Content type and encoding
    metadataBase: siteUrl,
    // manifest: '/manifest.json',

    // Open Graph metadata for social sharing
    openGraph: {
        title: 'SelaMonti',
        description: 'Explore world-class art, science and historical artifacts in our immersive digital museum experience',
        // images: ['/og-image.jpg'],
        url: siteUrl,
        siteName: "SelaMonti",
        type: "website",
    },

    alternates: {
        canonical: siteUrl.toString(),
    },

    // Twitter card metadata
    twitter: {
        card: 'summary_large_image',
        title: 'Digital Museum | 3D Artifacts',
        description: 'Explore world-class art, science and historical artifacts in our immersive digital museum experience',
        creator: '@btbteam',
        // images: ['/twitter-card.jpg'],
    },

    // Application icon
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/logo.png',
    },

    // Robots metadata
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // App information
    applicationName: 'Sela Monti',
    authors: [{ name: 'BTB Class Team', url: `${siteUrl}/about-us` }],
    generator: 'Next.js',
    keywords: ['សិលាមន្ទីរ', 'selamonti', 'sela monti', 'digital museum', 'cambodia museum', 'khmer museum', '3D artifacts', 'online art gallery', 'interactive history', 'cultural heritage'],
};

// Viewport settings
export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0d1117' }
    ],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org ",
                            "@type": "Museum",
                            name: "SelaMonti",
                            description: "Digital museum featuring art, science and historical artifacts",
                            // Add more structured data here as needed
                            url: siteUrl.toString(),
                            logo: `${siteUrl}/logo.png`,
                            sameAs: [
                                // "https://twitter.com/btbteam ",
                                // Add other social profiles if available
                            ],
                        }),
                    }}
                />
            </head>

            <body
                className={satoshi.className}
            >
                {children}
            </body>
        </html>
    );
}
