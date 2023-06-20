import Image from "next/image";

import BtnCollection from "./Btns-Scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const NiorImages_Data = [
  {
    id: "01",
    url: "/imgs/Cups_imgs/Cups_Nior_01.jpg",
  },
  {
    id: "02",
    url: "/imgs/Cups_imgs/Cups_Nior_02.jpg",
  },
  {
    id: "03",
    url: "/imgs/Cups_imgs/Cups_Nior_03.jpg",
  },
];

export default function NiorImages() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Scrollbar, A11y]}
        pagination={{ clickable: true }}
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
                priority
              />
            </SwiperSlide>
          );
        })}
        <div>
          <BtnCollection />
        </div>
      </Swiper>
    </div>
  );
}
