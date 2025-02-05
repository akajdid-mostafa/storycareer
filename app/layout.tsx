import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script"; // Import the Script component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StoryCareer",
  description:
    "StoryCareer is a unique platform where individuals from all walks of life can share their stories, challenges, and successes.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-black.svg",
        href: "/favicon-black.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-white.svg",
        href: "/favicon-white.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          {/* Use Next.js Script component with proper strategy */}
          <Script 
            src="https://colt-data.vercel.app/api/track?token=76e50b55-1c34-4ac2-8824-45406cc815ff"
            strategy="afterInteractive"
          />
        </body>
      </html>
    </ClerkProvider>
  );
}