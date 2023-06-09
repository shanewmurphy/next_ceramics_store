import Image from "next/image";

import BtnCollection from "./Btns-Scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const RoseImages_Data = [
  {
    id: "01",
    url: "/imgs/Dinnerware_Sets_imgs/Dinnerware_Rose_01-min.jpg",
  },
  {
    id: "02",
    url: "/imgs/Dinnerware_Sets_imgs/Dinnerware_Rose_02-min.jpg",
  },
  {
    id: "03",
    url: "/imgs/Dinnerware_Sets_imgs/Dinnerware_Rose_03-min.jpg",
  },
  {
    id: "04",
    url: "/imgs/Dinnerware_Sets_imgs/Dinnerware_Rose_04-min.jpg",
  },
];

export default function RoseImages() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Scrollbar, A11y]}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {RoseImages_Data.map((image) => {
          return (
            <SwiperSlide key={image.id}>
              <Image
                className="object-fit"
                src={image.url}
                width={2000}
                height={2000}
                alt="Dinnerwear Set Rose"
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
