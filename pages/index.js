import Head from "next/head";
import Image from "next/image";
import ShippingNote from "../components/Shipping-Note";
import Hero from "../components/Nav/Hero";
import NavDesktop from "../components/Nav/Nav-desktop";
import BestSellers from "../components/Carousels/Best-Sellers";
import BestSellersMobile from "../components/Carousels/Best-Sellers-Mobile";
import Crafted from "../components/HomePage/Crafted";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavDesktop />
        <Hero />
      </div>
      <div>
        <BestSellers />
        <BestSellersMobile />
      </div>
      <div>
        <Crafted />
      </div>
      <div className="lg:w-2/3 md:w-10/12 sm:w-11/12 mx-auto mb-40">
        <h2 className="text-center font-bold text-text lg:text-5xl md:text-4xl sm:text-2xl antialiased">
          Bridging the gap between <i className="font-medium">makers</i> and
          users by sharing the
          <i className="font-medium"> stories</i> and <i>traditions</i> behind
          the products we use.
        </h2>
      </div>
    </div>
  );
}
