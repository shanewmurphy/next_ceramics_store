import Image from "next/image";
import Layout from "@/components/Layout/Layout";
export default function Sustainability() {
  return (
    <Layout>
      <div></div>
      <div className="flex w-11/12 mx-auto lg:mt-52 md:mt-40 sm:mt-40 sm:mb-8 antialiased">
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
          <h4 className="text-text font-medium text-base sm:text-sm mt-4 lg:hidden md:hidden sm:block">
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
      <div className="flex w-11/12 items-center mx-auto lg:flex-row md:flex-col sm:flex-col lg:gap-12 md:gap-12 sm:gap-2">
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
          <h4 className="lg:text-4xl md:text-4xl sm:text-2xl font-bold text-text mt-2 lg:mb-2 md:mb-2 sm:mb-2 lg:text-left md:text-center sm:text-center antialiased">
            Repurposed Water Waste
          </h4>
          <p className="text-text font-medium lg:text-xl md:text-2xl sm:text-sm antialiased">
            In the ceramic making process, water is one of the key ingredients.
            To reduce unnecessary waste, excess water used in our production
            process is filtered and repurposed for local farming and agriculture
          </p>
        </div>
      </div>
      <div className="flex w-11/12 items-center mx-auto lg:flex-row md:flex-col sm:flex-col lg:mt-40 md:mt-40 sm:mt-16 lg:gap-12 md:gap-12 sm:gap-6">
        <div className="basis-3/6">
          <h4 className="lg:text-4xl md:text-4xl sm:text-2xl font-bold text-text mt-2 sm:mt-8 lg:mb-2 md:mb-2 sm:mb-2 lg:text-left md:text-center sm:text-center antialiased">
            Recycled Clay
          </h4>
          <p className="text-text font-medium lg:text-xl md:text-2xl sm:text-sm antialiased">
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
    </Layout>
  );
}
