import Image from "next/image";

import BtnCollection from "./Btns-Scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const OliveImages_Data = [
  {
    id: "01",
    url: "/imgs/Dinnerware_Sets_imgs/Dinnerware_Olive_01-min.jpg",
  },
  {
    id: "02",
    url: "/imgs/Dinnerware_Sets_imgs/Dinnerware_Olive_02-min.jpg",
  },
  {
    id: "03",
    url: "/imgs/Dinnerware_Sets_imgs/Dinnerware_Olive_03-min.jpg",
  },
];

export default function OliveImages() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Scrollbar, A11y]}
        pagination={{ clickable: true }}
      >
        {OliveImages_Data.map((image) => {
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
