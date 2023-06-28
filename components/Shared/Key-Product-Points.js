import Image from "next/image";
export default function KeyPoints() {
  return (
    <div>
      <div className="w-11/12 mx-auto lg:mb-40 md:mb-32 sm:mb-24">
        <div className="grid lg:grid-cols-3 sm:grid-flow-row gap-8">
          <div>
            <div className="flex justify-center">
              <Image
                src="/imgs/Irish_Ceramics_icon.svg"
                height={200}
                width={100}
                alt="icon"
              />
            </div>
            <div>
              <h5 className="text-center lg:mt-2 md:mt-2 sm:mt-4 text-lg text-text font-semibold antialiased">
                Premium Irish Pottery
              </h5>
              <p className="lg:w-72 md:w-72 sm:w-48 mx-auto text-center text-base text-text font-medium antialiased">
                Expert craftsmanship perfected through the centuries.
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Image
                src="/imgs/Microwave_icon.svg"
                height={200}
                width={100}
                alt="icon"
              />
            </div>
            <div>
              <h5 className="lg:w-full md:w-full sm:w-64 mx-auto text-center lg:mt-10 md:mt-2 sm:mt-4 text-lg text-text font-semibold antialiased">
                100% Microwave, Oven & Dishwasher Safe
              </h5>
              <p className="lg:w-72 md:w-72 sm:w-48 mx-auto text-center text-base text-text font-medium antialiased">
                Commercial grade durability.Freezer to oven safe up to
                220C/430F.
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center lg:mb-8 md:mb-8 sm:mb-4">
              <Image
                src="/imgs/Plant_icon.svg"
                height={200}
                width={70}
                alt="icon"
              />
            </div>
            <div>
              <h5 className="text-center lg:mt-2 md:mt-2 sm:mt-4 text-lg text-text font-semibold antialiased">
                Plant a Tree Every €50 Spent
              </h5>
              <p className="lg:w-72 md:w-72 sm:w-48 mx-auto text-center text-base text-text font-medium antialiased">
                We donate a portion of our sales to reforestation. Learn more
                about our sustainability promise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
