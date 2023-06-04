import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const NiorImages_Data = [
  {
    id: "01",
    url: "/imgs/Dinnerware_Sets_imgs/Nior_01.jpg",
  },
  {
    id: "02",
    url: "/imgs/Dinnerware_Sets_imgs/Nior_02.jpg",
  },
  {
    id: "03",
    url: "/imgs/Dinnerware_Sets_imgs/Nior_03.jpg",
  },
  {
    id: "04",
    url: "/imgs/Dinnerware_Sets_imgs/Nior_04.jpg",
  },
  {
    id: "05",
    url: "/imgs/Dinnerware_Sets_imgs/Nior_05.jpg",
  },
];

const Product_Data = [
  {
    id: "01",
    Colour: "Noir",
    PrductTitle: "Dinnerware Set",
    Set: "16 Piece Set",
    descriptionShort:
      "Our dinner sets make it easy to stock your kitchen cabinets with dinnerware you truly love.",
    descriptionLong:
      "With 4 pieces of each variation, it's perfect for parties of 2 to 4. Bigger families, dinner party hosts, and those that want to skip the dishes once in a while will want to grab a few more sets.",
    Price: "€199",
    Shipping: "10€ SHIPPING. DELIVERY IN 2-5 BUSINESS DAYS",
  },
];

export default function NiorDinnerwearSet() {
  return (
    <div>
      <div className="w-11/12 mx-auto mt-32 mb-40">
        <div className="flex relative lg:flex-row md:flex-col sm:flex-col">
          <div className="basis-3/5">
            <div className="lg:w-560 mx-auto">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {NiorImages_Data.map((image) => {
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
              </Swiper>
            </div>
          </div>
          <div className="basis-2/5 mx-auto">
            {Product_Data.map((productDetails) => {
              return (
                <div>
                  <div key={productDetails.id}>
                    <h1 className="text-text font-semibold text-3xl antialiased">
                      {productDetails.PrductTitle}
                      <span className="text-lg font-medium pl-2 antialiased">
                        ({productDetails.Set})
                      </span>
                    </h1>
                    <h2 className="mt-4 text-text font-semibold text-2xl antialiased">
                      {productDetails.Price}
                      <span className="pl-2 text-sm antialiased">Inc Vat</span>
                    </h2>
                    <p className="mt-4 text-sm text-text font-normal">
                      {productDetails.descriptionShort}
                    </p>
                    <p className="mt-2 text-sm text-text font-normal">
                      {productDetails.descriptionLong}
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium text-sm text-text">
                      Colour:
                      <span className="text-base pl-1">
                        {productDetails.Colour}
                      </span>
                    </p>
                    <ul className="inline-flex mt-2">
                      <li>
                        <Link href="#">
                          <span className="dot_black outline outline-offset-2 outline-2 outline-teal-600"></span>
                        </Link>
                      </li>
                      <li className="pl-4">
                        <Link href="/Dinnerware-Sets/Ivory-Dinnerware">
                          <span className="dot_white"></span>
                        </Link>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <p className="text-text font-semibold text-sm">
                        {productDetails.Shipping}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
