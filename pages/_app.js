import "../styles/globals.css";

import ShippingNote from "../components/Shipping-Note";
import { Inter } from "@next/font/google";
import ProductsContextProvider from "../Context/Product-context";
import CartContextProvider from "../Context/Cart-context";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter_tight",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProductsContextProvider>
        <CartContextProvider>
          <main className={`${inter.variable} font-sans`}>
            <div>
              <ShippingNote />
            </div>
            <Component {...pageProps} />
          </main>
        </CartContextProvider>
      </ProductsContextProvider>
    </>
  );
}

export default MyApp;
