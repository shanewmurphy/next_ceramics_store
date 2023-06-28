import Image from "next/image";
import Layout from "@/components/Layout/Layout";
export default function OurStory() {
  return (
    <Layout>
      <div className="w-11/12 mx-auto">
        <div className="lg:w-3/4 mx-auto lg:mt-56 md:mt-40 sm:mt-40">
          <h2 className="lg:text-5xl md:text-5xl sm:text-xl text-center font-bold text-text mb-16 antialiased">
            We are a group of <i className="font-semibold">adventurers</i> and
            <i className="font-semibold"> explorers,</i> tired of the current
            trend of mass production where things come faster and cheaper, and
            we don&apos;t know how it&apos;s made or who it&apos;s made by.
          </h2>
        </div>
        <div className="w-11/12 mb-40 mx-auto">
          <Image
            src="/imgs/Our_Story_01-min.jpg"
            width={1111}
            height={741}
            alt="Pottery workshop"
            effect="blur"
            priority={true}
          />
        </div>
        <div className="flex w-11/12 items-center mx-auto lg:flex-row md:flex-col sm:flex-col mt-4 lg:mb-40 md:mb-24 sm:mb-24">
          <div className="basis-3/5">
            <Image
              src="/imgs/Our_Story_03-min.jpg"
              width={582}
              height={700}
              effect="blur"
              alt="workshop studio"
            />
          </div>
          <div className="basis-2/5">
            <h4 className="lg:text-4xl md:text-4xl sm:text-2xl font-bold text-text mt-2 lg:mb-2 md:mb-2 sm:mb-2 lg:text-left md:text-center sm:text-center antialiased">
              Our Mission
            </h4>
            <h5 className="text-text font-medium lg:text-xl md:text-2xl sm:text-sm antialiased">
              We bring quality artisanal goods from around the world, right to
              your doorstep. Always ethically sourced and sustainably crafted,
              each piece has a story - let’s explore them together.
            </h5>
          </div>
        </div>
        <div className="flex w-11/12 items-center mx-auto lg:flex-row md:flex-col sm:flex-col mt-4 mb-40 antialiased">
          <div className="basis-7/12">
            <h4 className="lg:text-4xl md:text-4xl sm:text-2xl font-bold text-text mt-2 lg:mb-4 md:mb-2 sm:mb-2 lg:text-left md:text-center sm:text-center antialiased">
              In a world of fast production at massive scales, we&apos;re found
              themselves struggling to find high-quality products at affordable
              prices.
            </h4>
            <p className="text-text font-medium lg:text-base md:text-base sm:text-sm mb-2">
              As avid travelers, a recent visit to a ceramics artisan in Ireland
              sparked something within them. Why must they travel across the
              globe to find high-quality goods that they cherished and enjoyed
              using?
            </p>
            <p className="text-text font-medium lg:text-base md:text-base sm:text-sm lg:mb-2 md:mb-6 sm:mb-12 sm:mt-6">
              An answer to the environmental issues and wasteful consumerism
              created by globalization and production at massive scales.
            </p>
          </div>
          <div className="basis-5/12">
            <Image
              className="float-right ml-auto"
              src="/imgs/Our_Story_02-min.jpg"
              width={384}
              height={500}
              effect="blur"
              alt="workshop studio"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
