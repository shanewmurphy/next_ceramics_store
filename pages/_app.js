import "../styles/globals.css";

import ShippingNote from "../components/Shipping-Note";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter_tight",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={`${inter.variable} font-sans`}>
        <div>
          <ShippingNote />
        </div>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
