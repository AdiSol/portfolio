import { Fraunces, Space_Grotesk, Karla } from "next/font/google";
import "./globals.css";
import { BackgroundBlobs } from "./components/layout/BackgroundBlobs";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import type { Metadata } from "next";


const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Adrienne Soliven — Frontend Engineer",
  description: "Frontend engineer building React interfaces for AI and EdTech products — then watching real users break them.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${karla.variable} ${spaceGrotesk.variable} h-full antialiased`}
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
