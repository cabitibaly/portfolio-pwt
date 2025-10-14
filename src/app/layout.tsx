import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { PrimeReactProvider } from "primereact/api";
import LenisWrapper from "@/components/wrapper/lenisWrapper";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Powertech SARL",
  description: "Portfolio de PowerTech SARL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${raleway.className}`}
      >
        <LenisWrapper>
          <PrimeReactProvider>
            {children}
          </PrimeReactProvider>
        </LenisWrapper>
      </body>
    </html>
  );
}
