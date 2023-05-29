import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperBtns from "./Swiper-Blog-Btns";

const Blog_Data = [
  {
    id: "01",
    Title: "Clay and Creativity",
    Image: "/imgs/Blog_imgs/Blog_Mob_01-min.jpg",
    alt: "Blog Clay and Creativity",
    Date: "23 Feb, 2023",
    URL: "",
  },
  {
    id: "02",
    Title: "Ceramic Techniques Uncovered",
    Image: "/imgs/Blog_imgs/Blog_Mob_02-min.jpg",
    alt: "Ceramic Techniques Uncovered",
    Date: "12 Mar, 2023",
    URL: "",
  },
  {
    id: "03",
    Title: "Designing with Clay",
    Image: "/imgs/Blog_imgs/Blog_Mob_03-min.jpg",
    alt: "Designing with Clay",
    Date: "12 May, 2023",
    URL: "",
  },
];

export default function BlogCarousel() {
  return (
    <div>
      <div className="w-11/12 mx-auto lg:hidden md:hidden sm:block mb-40">
        <div>
          <Swiper
            spaceBetween={10}
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <div>
              <SwiperBtns />
            </div>
            {Blog_Data.map((Blogs) => {
              return (
                <SwiperSlide className="mt-16" key={Blogs.id}>
                  <div>
                    <Image
                      src={Blogs.Image}
                      width={249}
                      height={260}
                      alt={Blogs.alt}
                    />
                  </div>
                  <div>
                    <h3 className="mt-2 text-sm font-bold text-text">
                      {Blogs.Title}
                    </h3>
                    <h4 className="mt-1 text-xs font-medium text-text">
                      {Blogs.Date}
                    </h4>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
