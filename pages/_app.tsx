import { AppProps } from "next/app";
import { Abel } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const abel = Abel({ weight: "400", subsets: ["latin"], display: "swap" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={abel.className}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}

export default MyApp;
