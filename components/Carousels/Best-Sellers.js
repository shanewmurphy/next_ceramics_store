import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import SwiperBtns from "./Swiper-Btns";

const BestSellers_Data = [
  {
    id: "01",
    image: "/imgs/BestSellers_imgs/Dinnerware_Set_Noir_16_Piece_Set.jpg",
    name: "Dinnerware Set",
    configuration: "16 Piece Set",
    price: "€199",
    link: "/Dinnerware-Collection",
  },
  {
    id: "02",
    image: "/imgs/BestSellers_imgs/Tableware_Set_White_36_Piece_Set.jpg",
    name: "Tableware Set",
    configuration: "36 Piece Set",
    price: "€300",
    link: "/Dinnerware-Collection",
  },
  {
    id: "03",
    image: "/imgs/BestSellers_imgs/Dinnerware_Set_Olive_12_Piece_Set.jpg",
    name: "Dinnerware Set",
    configuration: "12 Piece Set",
    price: "€179",
    link: "/Dinnerware-Collection",
  },
  {
    id: "04",
    image: "/imgs/BestSellers_imgs/Big_Plates_Black_4_Piece_Set.jpg",
    name: "Dinnerware Set",
    configuration: "12 Piece Set",
    price: "€199",
    link: "/Plates-Collection",
  },
  {
    id: "05",
    image: "/imgs/BestSellers_imgs/Small_Plates_Olive_4_Piece_Set.jpg",
    name: "Small Plates",
    configuration: "4 Piece Set",
    price: "€78",
    link: "/Plates-Collection",
  },
  {
    id: "06",
    image: "/imgs/BestSellers_imgs/Bowls_4_Piece_Set.jpg",
    name: "Bowls",
    configuration: "4 Piece Set",
    price: "€78",
    link: "/Bowels-Collection",
  },
];

export default function BestSellers() {
  return (
    <div className="w-11/12  mx-auto mt-20 mb-40 lg:block md:block sm:hidden">
      <div className="mt-8">
        <Swiper
          modules={[Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
        >
          <div>
            <SwiperBtns />
          </div>
          {BestSellers_Data.map((BestSellers) => {
            return (
              <SwiperSlide className="mt-16" key={BestSellers.id}>
                <div>
                  <Link href={BestSellers.link} className="Link_container">
                    <div className="relative group">
                      <Image
                        src={BestSellers.image}
                        width={600}
                        height={600}
                        effect="blur"
                        alt="product"
                      />
                      <button className="absolute z-10 inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-button text-white px-4 py-2 rounded hover:bg-button transition duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                        View
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="">
                  <h4 className="text-center font-semibold text-gray lg:text-xl md:text-lg sm:text-base mt-2 antialiased">
                    {BestSellers.name}
                    <span className="lg:text-sm md:text-xs sm:text-sm font-medium pl-1 antialiased">
                      ({BestSellers.configuration})
                    </span>
                  </h4>
                </div>
                <div>
                  <h6 className="text-center text-xl font-semibold text-gray mt-1">
                    {BestSellers.price}
                  </h6>
                </div>
                <div>
                  <div className="text-center">
                    <ul className="inline-flex mt-4">
                      <li className="pr-4">
                        <span className="dot_black"></span>
                      </li>
                      <li className="pr-4">
                        <span className="dot_olive"></span>
                      </li>
                      <li className="pr-4">
                        <span className="dot_white"></span>
                      </li>
                      <li className="pr-4">
                        <span className="dot_maroon"></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
