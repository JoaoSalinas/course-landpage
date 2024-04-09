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
  title: "Hello Coder: Curso Completo de Desenvolvimento de Software",
  description: "Aprenda programação do zero com nosso curso completo! Dominamos desde os fundamentos da lógica de programação até o desenvolvimento web, passando por algoritmos, programação orientada a objetos, bancos de dados, desenvolvimento frontend e backend, softskills e muito mais. Comece sua jornada para se tornar um desenvolvedor de software hoje!",
  keywords: ["curso de desenvolvimento de software", "programação", "algoritmos", "lógica de programação", "programação orientada a objetos", "desenvolvimento web", "frontend", "backend", "bancos de dados", "softskills", "javascript", "java", "typescript", "html", "css", "react", "nextjs", "nodejs", "expressjs", "mongodb", "postgresql", "graphql", "ruby on rails", "engenharia de software", "trabalho remoto", "inteligência artificial"]
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
