import Image from "next/image";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
export default function Crafted() {
  return (
    <div>
      <div className="flex items-center w-11/12 mx-auto lg:flex-row md:flex-col sm:flex-col mt-4 mb-40">
        <div className="basis-3/5">
          <Image
            className="crafted_hero_img"
            src="/imgs/Crafted_Hero_img.jpg"
            width={570}
            height={376}
            alt="crafted by tradition"
          />
        </div>
        <div className="basis-2/5 lg:pl-20 md:pl-8 md:pt-3">
          <h1 className="lg:text-4xl md:text-4xl sm:text-3xl text-text mt-2 mb-1 font-semibold lg:text-left md:text-center sm:text-center antialiased">
            Crafted <i className="">by</i> tradition
          </h1>
          <p className="text-text-base text-text font-medium lg:text-left md:text-left sm:text-center antialiased">
            Our pieces are expertly made by skilled producers in countries where
            traditional techniques have been refined over the centuries. We
            respect the history and culture behind the process in creating the
            quality to last a lifetime.
          </p>
          <p className="mt-3 lg:text-left md:text-center sm:text-center">
            <Link href="#">
              <button>
                <ul className="inline-flex">
                  <li>
                    <h5 className="pt-1 antialiased">Our Story</h5>
                  </li>
                  <li>
                    <ArrowSmallRightIcon className="h-8 w-8" />
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
