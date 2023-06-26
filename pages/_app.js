import "../styles/globals.css";
import { CartContext, useCartState } from "@/hooks/use-cart";

import { Inter } from "@next/font/google";
import Footer from "@/components/Footer/Footer";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter_tight",
});

function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return (
    <CartContext.Provider value={cart}>
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </CartContext.Provider>
  );
}

export default MyApp;
