import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundBlobs } from "./components/layout/BackgroundBlobs";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <div className="relative min-h-screen">
          <BackgroundBlobs />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
