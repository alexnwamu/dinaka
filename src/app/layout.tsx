import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Dinaka Nwamu | Software Engineer",
  description:
    "Software Engineer specializing in building exceptional digital experiences. Full Stack Developer passionate about creating intelligent, user-centric applications.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Dinaka Nwamu" }],
  openGraph: {
    title: "Dinaka Nwamu | Software Engineer",
    description:
      "Software Engineer specializing in building exceptional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-display`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: "",
              style: {
                background: "hsl(var(--card))",
                color: "hsl(var(--foreground))",
                border: "1px solid hsl(var(--border))",
              },
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
