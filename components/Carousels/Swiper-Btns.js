import { useSwiper } from "swiper/react";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
export default function SwiperBtns() {
  const swiper = useSwiper();
  return (
    <div>
      <div className="h-6">
        <div className="absolute leftt-0 top-0 z-20">
          <h3 className="lg:text-3xl md:text-3xl sm:text-2xl font-bold text-gray antialiased">
            Our Best Sellers
          </h3>
        </div>
        <div className="absolute right-0 top-0 z-20">
          <button onClick={() => swiper.slidePrev()}>
            <ArrowLeftIcon className="h-8 w-8  text-neutral-600 hover:text-neutral-500" />
          </button>
          <button onClick={() => swiper.slideNext()}>
            <ArrowRightIcon className="h-8 w-8 text-neutral-600 hover:text-neutral-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
