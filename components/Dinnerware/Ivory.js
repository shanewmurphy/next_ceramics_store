import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import BtnCollection from "./Btns-Scrollbar";

const IvoryImages_Data = [
  {
    id: "01",
    url: "/imgs/Dinnerware_Sets_imgs/Ivory_01.jpg",
  },
  {
    id: "02",
    url: "/imgs/Dinnerware_Sets_imgs/Ivory_02.jpg",
  },
  {
    id: "03",
    url: "/imgs/Dinnerware_Sets_imgs/Ivory_03.jpg",
  },
  {
    id: "04",
    url: "/imgs/Dinnerware_Sets_imgs/Ivory_04.jpg",
  },
];
const Product_Data_Ivory = [
  {
    id: "01",
    Colour: "Ivory",
    ProductTitle: "Dinnerware Set",
    Set: "16 Piece Set",
    descriptionShort:
      "Our dinner sets make it easy to stock your kitchen cabinets with dinnerware you truly love.",
    descriptionLong:
      "With 4 pieces of each variation, it's perfect for parties of 2 to 4. Bigger families, dinner party hosts, and those that want to skip the dishes once in a while will want to grab a few more sets.",
    Price: "€199",
    Shipping: "€15 SHIPPING. DELIVERY IN 2-5 BUSINESS DAYS",
  },
];
const Ivory = ({ loadNoir, loadRose, loadOlive }) => {
  return (
    <div>
      <div className="flex lg:w-11/12 md:w-11/12 sm:w-11/12 lg:flex-row md:flex-col sm:flex-col mx-auto mt-20 mb-40 lg:gap-12 md:gap-6 sm:gap-4">
        <div className="lg:w-6/12">
          <div className="lg:w-560 mx-auto lg:mb-6 md:mb-0">
            <div>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Scrollbar, A11y]}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {IvoryImages_Data.map((image) => {
                  return (
                    <SwiperSlide key={image.id}>
                      <Image
                        className="object-fit"
                        src={image.url}
                        width={2000}
                        height={2000}
                        alt="Dinnerwear Set Nior"
                      />
                    </SwiperSlide>
                  );
                })}
                <div>
                  <BtnCollection />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12">
          <div>
            {Product_Data_Ivory.map((Ivory) => {
              return (
                <div key={Ivory.id}>
                  <h2 className="text-text font-semibold lg:text-left md:text-center sm:text-center lg:text-3xl md:text-4xl sm:text-2xl antialiased">
                    {Ivory.ProductTitle}
                    <span className="text-text lg:text-base md:text-lg sm:text-sm font-medium pl-2">
                      ({Ivory.Set})
                    </span>
                  </h2>
                  <h3 className="text-text font-bold lg:text-2xl md:text-xl sm:text-2xl lg:text-left md:text-center sm:text-center lg:mt-4 md:mt-6 sm:mt-4 antialiased">
                    {Ivory.Price}
                    <span className="text-text font-medium text-sm pl-2">
                      Inc Vat
                    </span>
                  </h3>
                  <div className="w-1/2 mx-auto lg:mt-8 md:mt-6 sm:mt-6 lg:hidden md:block sm:block">
                    <div className="text-text text-center font-medium text-base antialiased">
                      Colour:<span className="pl-1">{Ivory.Colour}</span>
                    </div>
                    <div className="mt-4">
                      <ul className="inline-flex text-center">
                        <li>
                          <button onClick={loadNoir}>
                            <span className="dot_black"></span>
                          </button>
                        </li>
                        <li className="pl-6">
                          <button>
                            <span className="dot_white outline outline-offset-2 outline-2 outline-neutral-500"></span>
                          </button>
                        </li>
                        <li className="pl-6">
                          <button onClick={loadOlive}>
                            <span className="dot_olive"></span>
                          </button>
                        </li>
                        <li className="pl-6">
                          <button onClick={loadRose}>
                            <span className="dot_maroon"></span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row justify-center lg:hidden md:hidden sm:flex mx-auto mt-6 mb-6 gap-2">
                      <di>
                        <button className="w-36 py-2 px-6 text-button border-2 border-button">
                          Add to Cart
                        </button>
                      </di>
                      <div>
                        <button className="w-40  py-2 px-6 border-2 text-white border-button bg-button">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-text font-medium text-sm lg:mt-4 md:mt-6 sm:mt-4 antialiased">
                    {Ivory.descriptionShort}
                  </p>
                  <p className="text-text font-medium text-sm lg:mt-4 md:mt-6 sm:mt-4 antialiased">
                    {Ivory.descriptionLong}
                  </p>
                  <div className="lg:mt-8 md:mt-6 sm:mt-6 lg:block md:hidden sm:hidden">
                    <div className="text-text font-medium text-base antialiased">
                      Colour:<span className="pl-1">{Ivory.Colour}</span>
                    </div>
                    <div className="mt-2">
                      <ul className="inline-flex mt-2">
                        <li>
                          <button onClick={loadNoir}>
                            <span className="dot_black"></span>
                          </button>
                        </li>
                        <li className="pl-6">
                          <button onClick={loadNoir}>
                            <span className="dot_white outline outline-offset-2 outline-2 outline-neutral-500"></span>
                          </button>
                        </li>
                        <li className="pl-6">
                          <button onClick={loadOlive}>
                            <span className="dot_olive"></span>
                          </button>
                        </li>
                        <li className="pl-6">
                          <button onClick={loadRose}>
                            <span className="dot_maroon"></span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:mt-6 md:mt-6 sm:mt-4">
                    <h4 className="text-text font-semibold lg:text-sm md:text-base sm:text-sm">
                      {Ivory.Shipping}
                    </h4>
                  </div>
                  <div className="flex w-660 mx-auto lg:text-left sm:text-center md:text-center lg:row md:row sm:col mt-6 lg:block md:block sm:hidden">
                    <ul className="lg:inline-flex md:inline-flex mt-4">
                      <li>
                        <button className="lg:px-20 lg:py-4 md:px-20 md:py-4 text-center text-button border-2 border-button">
                          Add to Cart
                        </button>
                      </li>
                      <li className="ml-6">
                        <button className="lg:px-20 lg:py-4 md:px-20 md:py-4 text-center text-white border-2 border-button bg-button">
                          Checkout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ivory;
