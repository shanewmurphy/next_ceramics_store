import "../styles/globals.css";
import { CartContext, useCartState } from "@/hooks/use-cart";

import ShippingNote from "../components/Shipping-Note";
import { Inter } from "@next/font/google";

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
        <div>
          <ShippingNote />
        </div>
        <Component {...pageProps} />
      </main>
    </CartContext.Provider>
  );
}

export default MyApp;
