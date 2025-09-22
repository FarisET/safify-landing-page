import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://safify.tech"),
  title: {
    default: "Safify",
    template: "%s | Safify",
  },
  description: "Ensure workplace safety and streamline incident management with Safify.",
  openGraph: {
    type: "website",
    url: "https://safify.tech/",
    siteName: "Safify",
    title: "Safify",
    description:
      "Ensure workplace safety and streamline incident management with Safify.",
    images: [
      {
        url: "/images/safify-og-banner.png",
        width: 1200,
        height: 630,
        alt: "Safify Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safify",
    description:
      "Ensure workplace safety and streamline incident management with Safify.",
    images: ["/images/safify-og-banner.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
