import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontDisplay, fontText } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import BannerDown from "@/components/home/banner-down/BannerDown";
import Certificate from "@/components/home/certificate/Certificate";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "white",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen min-w-[1200px] text-foreground bg-background font-sans antialiased",
          fontDisplay.variable,
          fontText.variable
        )}
      >
        <Providers>
          <div
            className="relative flex flex-col min-h-screen min-w-[1200px] bg-no-repeat bg-neutral-2"
            style={{
              backgroundSize: "100% auto",
              backgroundImage:
                "linear-gradient(to bottom, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 100%), url(/images/background.webp)",
            }}
          >
            <Navbar />
            <main className="container mx-auto py-6 px-6 flex-grow max-w-[1200px]">
              {children}
            </main>
            <BannerDown />
            <Certificate />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
