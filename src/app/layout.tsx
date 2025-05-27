import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

const brand = process.env.BRAND || 'leesimons';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={brand}>
      <body className={cn(
        "min-h-screen antialiased",
        inter.className
      )}>
        {children}
        <GoogleAnalytics gaId="G-FGGEXGYT1G" />
      </body>
    </html>
  );
}
