import Image from "next/image";

export default function Sustainability() {
  return (
    <div>
      <div></div>
      <div className="flex w-11/12 mx-auto lg:mt-40 md:mt-40 sm:mt-20 sm:mb-8 antialiased">
        <div>
          <h2 className="text-center text-text font-bold lg:text-5xl md:text-5xl sm:text-3xl mb-1">
            <i className="font-medium">Our</i> Sustainability Promise
          </h2>
          <p className="text-center text-text font-semibold lg:text-2xl lg:w-8/12 mx-auto">
            In a world where products come faster and cheaper, manufacturing has
            shifted to places with lower regulations, creating severe
            environmental issues in many developing nations.
          </p>
        </div>
      </div>
      <div className="flex w-11/12 items-center mx-auto lg:flex-row md:flex-col sm:flex-col lg:mt-40 sm:mb-4 antialiased gap-12">
        <div className="basis-3/6">
          <Image
            src="/imgs/Trees_01-min.jpg"
            width={1200}
            height={800}
            alt="trees"
            effect="blur"
          />
          <h4 className="text-text font-semibold sm:text-sm mt-4 lg:hidden md:hidden sm:block">
            To combat this, we decided to partner with The Trillion Tree
            Campaign and contribute a portion of our sales to fund reforestation
            projects around the world, with the aim of reaching 1 trillion trees
            planted collectively by 2050.
          </h4>
        </div>
        <div className="basis-3/6">
          <h4 className="text-text font-semibold lg:text-2xl lg:block md:block sm:hidden">
            To combat this, we decided to partner with The Trillion Tree
            Campaign and contribute a portion of our sales to fund reforestation
            projects around the world, with the aim of reaching 1 trillion trees
            planted collectively by 2050.
          </h4>
        </div>
      </div>
      <div className="flex mx-auto lg:mt-40 lg:mb-40 md:mb-24 sm:mb-16 antialiased">
        <div className="lg:w-9/12 md:w-7/12 sm:w-11/12 mx-auto">
          <h3 className="text-text text-center font-bold lg:text-5xl md:text-5xl sm:text-lg">
            We&apos;ve also optimized our production processes and supply chain
            to operate in a much more sustainable way, reducing our carbon
            footprint.
          </h3>
        </div>
      </div>
      <div className="flex w-11/12 items-center mx-auto lg:flex-row md:flex-col sm:flex-col gap-12">
        <div className="basis-3/6">
          <Image
            src="/imgs/water_recycling.jpg"
            width={1392}
            height={932}
            alt="recycling water"
            effect="blur"
          />
        </div>
        <div className="basis-3/6 antialiased">
          <h3 className="text-text font-semibold lg:text-4xl mb-2">
            Repurposed Water Waste
          </h3>
          <p className="text-text font-medium text-base lg:mb-2 md:mb-6 sm:mb-12">
            In the ceramic making process, water is one of the key ingredients.
            To reduce unnecessary waste, excess water used in our production
            process is filtered and repurposed for local farming and
            agriculture.
          </p>
        </div>
      </div>
      <div className="flex w-11/12 items-center mx-auto lg:flex-row md:flex-col sm:flex-col lg:mt-40 gap-12">
        <div className="basis-3/6">
          <h3 className="text-text font-semibold lg:text-4xl mb-2">
            Recycled Clay
          </h3>
          <p className="text-text font-medium text-base lg:mb-2 md:mb-6 sm:mb-12">
            To reduce our carbon footprint. Excess clay trimming and defective
            pieces in the production process are then recycled and reused to
            produce new pieces. No spare material is ever left behind.
          </p>
        </div>
        <div className="basis-3/6">
          <Image
            src="/imgs/recycled_clay-min.jpg"
            width={1392}
            height={932}
            alt="reclyed clay"
            effect="blur"
          />
        </div>
      </div>
      <div className="mb-40"></div>
    </div>
  );
}
