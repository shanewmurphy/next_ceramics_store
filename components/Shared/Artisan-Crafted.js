import Image from "next/image";

export default function ArtisanCrafted() {
  return (
    <div>
      <div className="flex items-center w-11/12 lg:flex-row md:flex-col sm:flex-col mx-auto lg:gap-16 md:gap-16 sm:gap-0 lg:mb-40 md:mb-28 sm:mb-40">
        <div className="basis-3/5">
          <div>
            <Image
              className="img_fill"
              src="/imgs/Crafted_Hero_img.jpg"
              width={570}
              height={376}
              alt="Crafted"
              priority="true"
            />
          </div>
        </div>
        <div className="basis-2/5">
          <h4 className="lg:text-4xl md:text-4xl sm:text-2xl font-bold text-text mt-2 sm:mt-4 lg:mb-2 md:mb-2 sm:mb-2 lg:text-left md:text-center sm:text-center antialiased">
            Artisan Crafted
          </h4>
          <p className="text-text font-medium lg:text-base md:text-2xl sm:text-sm antialiased">
            Fertile soil in the surrounding regions make high quality raw
            materials readily available for production. Our manufacturing
            partners use generations of expertise to deliver the quality to last
            a lifetime. Each piece is carefully hand finished, packaged, and
            checked for imperfections.
          </p>
        </div>
      </div>
      <div className="flex items-center w-11/12 lg:flex-row md:flex-col sm:flex-col mx-auto lg:gap-16 md:gap-16 sm:gap-0 lg:mb-40 md:mb-28 sm:mb-40">
        <div className="basis-2/5">
          <h4 className="lg:text-4xl md:text-4xl sm:text-2xl font-bold text-text mt-2 sm:mt-4 lg:mb-2 md:mb-2 sm:mb-2 lg:text-left md:text-center sm:text-center antialiased">
            Functional Design
          </h4>
          <p className="text-text font-medium lg:text-base md:text-2xl sm:text-sm antialiased">
            Our pieces are designed to be stacked and colors mixed and matched.
            Vertical rims prevent against accidental spills. Not just
            fashionable décor, this collection is made for heavy, frequent use -
            it&apos; 100% microwave, dishwasher, and freezer to oven safe up to
            220C/430F. You'll never go back to cheap, generic dinnerware again.
          </p>
        </div>
        <div className="basis-3/5 lg:order-last sm:order-first">
          <div>
            <Image
              className="img_fill"
              src="/imgs/Function_Design.jpg"
              width={1744}
              height={1164}
              alt="Crafted"
              priority="true"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center w-11/12 lg:flex-row md:flex-col sm:flex-col mx-auto lg:gap-16 md:gap-16 sm:gap-0 lg:mb-40 md:mb-28 sm:mb-40">
        <div className="basis-3/5">
          <div>
            <Image
              className="img_fill"
              src="/imgs/Limitless_Releases.jpg"
              width={570}
              height={376}
              alt="Crafted"
              priority="true"
            />
          </div>
        </div>
        <div className="basis-2/5">
          <h4 className="lg:text-4xl md:text-4xl sm:text-2xl font-bold text-text mt-2 sm:mt-4 lg:mb-2 md:mb-2 sm:mb-2 lg:text-left md:text-center sm:text-center antialiased">
            Limited Releases
          </h4>
          <p className="text-text font-medium lg:text-base md:text-2xl sm:text-sm antialiased">
            In order to combat unnecessary waste, we limit our pieces to be
            produced in smaller batches. This allows us to reduce our
            environmental footprint and to give more care and love to each item.
            Your favourite pieces may out of stock or only available for
            pre-order for an extended period of time, but just know that your
            patience is contributing to a greener planet.
          </p>
        </div>
      </div>
    </div>
  );
}
