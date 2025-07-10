import { Poppins } from "next/font/google";
import { EB_Garamond } from 'next/font/google';

import "./globals.css";
import AppProvider from "./Provider/AppProvider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ['latin'],
  weight: ['400', '700'], // choose available weights
  display: 'swap'
});


export const metadata = {
  title: "Ephyre",
};

export default function RootLayout({ children }) {
  return (
    <html
      translate="no"
      lang="en"
      className={`${poppins.variable} ${ebGaramond.variable} notranslate `}
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className=" font-raleway">
        <AppProvider>{children}</AppProvider>
        <Toaster />
      </body>
    </html>
  );
}
