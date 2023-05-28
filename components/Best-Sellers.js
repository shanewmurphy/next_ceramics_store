import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SwiperBtns from "./Swiper-Btns";

const BestSellers_Data = [
  {
    id: "01",
    image: "/imgs/BestSellers_imgs/Dinnerware_Set_Noir_16_Piece_Set.jpg",
    name: "Dinnerware Set",
    configuration: "16 Piece Set",
    price: "€199",
  },
  {
    id: "02",
    image: "/imgs/BestSellers_imgs/Tableware_Set_White_36_Piece_Set.jpg",
    name: "Tableware Set",
    configuration: "36 Piece Set",
    price: "€300",
  },
  {
    id: "03",
    image: "/imgs/BestSellers_imgs/Dinnerware_Set_Olive_12_Piece_Set.jpg",
    name: "Dinnerware Set",
    configuration: "12 Piece Set",
    price: "€179",
  },
  {
    id: "04",
    image: "/imgs/BestSellers_imgs/Big_Plates_Black_4_Piece_Set.jpg",
    name: "Dinnerware Set",
    configuration: "12 Piece Set",
    price: "€199",
  },
  {
    id: "05",
    image: "/imgs/BestSellers_imgs/Small_Plates_Olive_4_Piece_Set.jpg",
    name: "Small Plates",
    configuration: "4 Piece Set",
    price: "€178",
  },
  {
    id: "06",
    image: "/imgs/BestSellers_imgs/Bowls_4_Piece_Set.jpg",
    name: "Bowls",
    configuration: "4 Piece Set",
    price: "€78",
  },
];

export default function BestSellers() {
  return (
    <div className="w-11/12 mx-auto mt-20 pb-40">
      <div className="static mt-8">
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
                  <Link href="#" className="Link_container">
                    <button className="btn text-2xl font-semibold antialiased">
                      View
                    </button>
                    <div className="relative">
                      <Image
                        src={BestSellers.image}
                        width={600}
                        height={600}
                        alt="product"
                      />
                    </div>
                  </Link>
                </div>
                <div>
                  <h4 className="text-center font-semibold text-gray text-xl mt-2 antialiased">
                    {BestSellers.name}
                    <span className="text-sm font-medium pl-1 antialiased">
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
                      <li className="pr-2">
                        <span className="dot_gray"></span>
                      </li>
                      <li className="pr-2">
                        <span className="dot_olive"></span>
                      </li>
                      <li className="pr-2">
                        <span className="dot_white"></span>
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
