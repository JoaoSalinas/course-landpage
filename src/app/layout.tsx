import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from 'next/font/local'
import { cn } from "@/lib/utils";

import { ThemeProvider } from "./_components/theme-provider";
import "./globals.css";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading'
})

export const metadata: Metadata = {
  title: "Modelo padrão de landpage",
  description: "Landpage utilizando Nextjs 14",
  keywords: ["landpage", "next", "react", "js", "ts", "tailwind"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable,
        fontHeading.variable
      )}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
