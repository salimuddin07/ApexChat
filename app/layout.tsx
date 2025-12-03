/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { getServerSideConfig } from "./config/server";

export const metadata: Metadata = {
  title: {
    default:
      "ApexChat AI by Saiyed Salimuddin - Advanced AI Assistant with Multiple Providers",
    template: "%s | ApexChat AI by Saiyed Salimuddin",
  },
  description:
    "ApexChat AI by Saiyed Salimuddin: Your ultimate AI assistant supporting OpenAI GPT-4, Claude, Gemini, DeepSeek & more. Created by Saiyed Salimuddin - Free online AI chat with voice, image generation, and real-time conversations.",
  keywords: [
    "AI chat",
    "ChatGPT",
    "Claude",
    "Gemini",
    "AI assistant",
    "artificial intelligence",
    "GPT-4",
    "OpenAI",
    "Anthropic",
    "Google AI",
    "DeepSeek",
    "free AI chat",
    "AI chatbot",
    "conversational AI",
    "machine learning",
    "natural language processing",
    "AI text generation",
    "AI image generation",
    "voice AI",
    "speech to text",
    "text to speech",
    "AI tools",
    "productivity AI",
    "coding assistant",
    "writing assistant",
    "AI conversation",
    "intelligent chatbot",
    "AI platform",
    "multi-model AI",
    "AI integration",
    "ApexChat",
    "next generation AI",
    "advanced AI",
    "smart AI",
    "AI technology",
    "AI solutions",
    "Saiyed Salimuddin",
    "Saiyed Salimuddin AI",
    "ApexChat by Saiyed Salimuddin",
    "Saiyed Salimuddin developer",
  ],
  authors: [{ name: "Saiyed Salimuddin", url: "https://www.salimuddin.tech/" }],
  creator: "Saiyed Salimuddin",
  publisher: "ApexChat AI by Saiyed Salimuddin",
  category: "Technology",
  classification: "Artificial Intelligence",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  googlebot: "index, follow",
  openGraph: {
    type: "website",
    title: "ApexChat AI by Saiyed Salimuddin - Advanced AI Assistant Platform",
    description:
      "Experience the future of AI conversation with ApexChat. Created by Saiyed Salimuddin. Support for GPT-4, Claude, Gemini, and more AI models in one powerful platform.",
    url: "https://github.com/salimuddin07/ApexChat",
    siteName: "ApexChat AI",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ApexChat AI - Advanced AI Assistant",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ApexChat AI by Saiyed Salimuddin - Advanced AI Assistant Platform",
    description:
      "Experience the future of AI conversation with ApexChat. Created by Saiyed Salimuddin. Support for GPT-4, Claude, Gemini, and more AI models.",
    creator: "@salimuddin07",
    site: "@ApexChatAI",
    images: ["/twitter-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://apexchat.vercel.app",
  },
  appleWebApp: {
    title: "ApexChat AI",
    statusBarStyle: "default",
    capable: true,
    startupImage: "/apple-startup-image.png",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  manifest: "/site.webmanifest",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "application-name": "ApexChat AI",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#000000",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serverConfig = getServerSideConfig();

  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        {/* SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="ApexChat AI" />
        <meta name="application-name" content="ApexChat AI" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta
          name="msapplication-square70x70logo"
          content="/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/mstile-310x310.png"
        />

        {/* Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ApexChat AI",
              description:
                "Advanced AI assistant platform supporting multiple AI models including GPT-4, Claude, Gemini, and DeepSeek",
              applicationCategory: "ProductivityApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Person",
                name: "Saiyed Salimuddin",
                url: "https://www.salimuddin.tech/",
              },
              url: "https://github.com/salimuddin07/ApexChat",
              downloadUrl: "https://github.com/salimuddin07/ApexChat",
              screenshot: "/og-image.png",
              featureList: [
                "Multiple AI Provider Support",
                "Voice Recognition",
                "Image Generation",
                "Real-time Conversations",
                "Cloud Sync",
                "Plugin System",
                "Mobile Responsive",
              ],
            }),
          }}
        />

        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link
          rel="icon"
          href="/favicon-16x16.png?v=2"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png?v=2"
          sizes="32x32"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <link
          rel="manifest"
          href="/site.webmanifest"
          crossOrigin="use-credentials"
        ></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>
        {children}
        {serverConfig?.isVercel && (
          <>
            <SpeedInsights />
          </>
        )}
        {serverConfig?.gtmId && (
          <>
            <GoogleTagManager gtmId={serverConfig.gtmId} />
          </>
        )}
        {serverConfig?.gaId && (
          <>
            <GoogleAnalytics gaId={serverConfig.gaId} />
          </>
        )}
      </body>
    </html>
  );
}
