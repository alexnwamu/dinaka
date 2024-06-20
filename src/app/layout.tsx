import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});
import localFont from "next/font/local";
import Head from "next/head";
export const metadata: Metadata = {
  title: "Dinaka Nwamu",
  description: "Software Engineer Portfolio",
};

const myFont = localFont({
  src: [
    {
      path: "./font/Unigeo64-Regular-trial.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/Unigeo64-Bold-trial.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <Head>
 <link rel="icon" href="./icon.ico" />
            </Head>
      <body className={`${myFont.className} ${outfit.variable}`}>
                
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
                    <Toaster/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
