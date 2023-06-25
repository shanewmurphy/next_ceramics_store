import "../styles/globals.css";
import { CartContext, useCartState } from "@/hooks/use-cart";

import { NextUIProvider, createTheme } from "@nextui-org/react";

import ShippingNote from "../components/Shipping-Note";
import { Inter } from "@next/font/google";
import Footer from "@/components/Footer/Footer";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter_tight",
});

const myDarkTheme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      background: "#1d1d1d",
      text: "#fff",
      // you can also create your own color
      myDarkColor: "#ff4ecd",
      myNavBackGround: "#E6DCD6",
      transparent: "transparent",
      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return (
    <CartContext.Provider value={cart}>
      <NextUIProvider theme={myDarkTheme}>
        <main className={`${inter.variable} font-sans`}>
          <div>
            <ShippingNote />
          </div>
          <Component {...pageProps} />
        </main>
        <Footer />
      </NextUIProvider>
    </CartContext.Provider>
  );
}

export default MyApp;
