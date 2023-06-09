import { useSwiper } from "swiper/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function BtnCollection() {
  const swiper = useSwiper();
  return (
    <div>
      <div className="lg:w-560 mx-auto lg:mt-6 md:mt-10 sm:mt-4">
        <div className="flex justify-between w-20 mx-auto">
          <div>
            <button onClick={() => swiper.slidePrev()}>
              <ArrowLeftIcon className="h-8 w-8  text-neutral-600 hover:text-neutral-500" />
            </button>
          </div>
          <div>
            <button onClick={() => swiper.slideNext()}>
              <ArrowRightIcon className="h-8 w-8 text-neutral-600 hover:text-neutral-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
