import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

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
    price: "€199",
    link: "/Dinnerware-Collection",
  },
  {
    id: "03",
    image: "/imgs/BestSellers_imgs/Dinnerware_Set_Olive_12_Piece_Set.jpg",
    name: "Dinnerware Set",
    configuration: "12 Piece Set",
    price: "€199",
    link: "/Dinnerware-Collection",
  },
  {
    id: "04",
    image: "/imgs/BestSellers_imgs/Big_Plates_Black_4_Piece_Set.jpg",
    name: "Dinnerware Set",
    configuration: "12 Piece Set",
    price: "€79",
    link: "/Plates-Collection",
  },
  {
    id: "05",
    image: "/imgs/BestSellers_imgs/Small_Plates_Olive_4_Piece_Set.jpg",
    name: "Small Plates",
    configuration: "4 Piece Set",
    price: "€79",
    link: "/Plates-Collection",
  },
  {
    id: "06",
    image: "/imgs/BestSellers_imgs/Bowls_4_Piece_Set.jpg",
    name: "Bowls",
    configuration: "4 Piece Set",
    price: "€79",
    link: "/Bowels-Collection",
  },
];
export default function BestSellersMobile() {
  return (
    <div className="w-11/12 mx-auto lg:hidden md:hidden sm:block mt-16 mb-40">
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <div>
            <SwiperBtns />
          </div>
          {BestSellers_Data.map((BestSellers) => {
            return (
              <SwiperSlide className="mt-16" key={BestSellers.id}>
                <div>
                  <Link href={BestSellers.link} className="Link_container">
                    <div className="relative">
                      <Image
                        src={BestSellers.image}
                        width={600}
                        height={600}
                        effect="blur"
                        alt="product"
                      />
                    </div>
                  </Link>
                </div>
                <div>
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
                      <li className="pr-2">
                        <span className="dot_black"></span>
                      </li>
                      <li className="pr-2">
                        <span className="dot_olive"></span>
                      </li>
                      <li className="pr-2">
                        <span className="dot_white"></span>
                      </li>
                      <li className="pr-2">
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
