import Image from "next/image";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
export default function Sustainability() {
  return (
    <div>
      <div className="flex items-center w-11/12 mx-auto lg:flex-row md:flex-col sm:flex-col mt-4 mb-40">
        <div className="basis-3/5">
          <Image
            className="crafted_hero_img"
            src="/imgs/Sustain_img-min.jpg"
            width={570}
            height={376}
            alt="Sustainability"
          />
        </div>
        <div className="basis-2/5 lg:pl-20 md:pl-8 md:pt-3">
          <h1 className="lg:text-4xl md:text-4xl sm:text-3xl text-text mt-2 lg:mb-1 md:mb-2 sm:mb-2 font-semibold lg:text-left md:text-center sm:text-center antialiased">
            Sustainability
          </h1>
          <p className="lg:text-text-base md:text-text-base sm:text-sm text-text font-medium lg:text-left md:text-left sm:text-center antialiased">
            Our raw materials are always locally sourced and production methods
            refined to limit environmental harm. We use 100% recyclable
            packaging and plant one or more trees for each item sold.
          </p>
          <p className="mt-3 lg:text-left md:text-center sm:text-center">
            <Link href="Sustainability">
              <button>
                <ul className="inline-flex">
                  <li>
                    <h5 className="text-xl text-text font-semibold antialiased">
                      Our Promise
                    </h5>
                  </li>
                  <li>
                    <ArrowSmallRightIcon className="h-8 w-8 text-text" />
                  </li>
                </ul>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
