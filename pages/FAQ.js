import Link from "next/link";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/20/solid";

const Shipping = [
  {
    id: "01",
    Question: "Where do you ship?",
    Answer:
      "Currently, we ship to the European Union, United Kingdom, and Switzerland.",
  },
  {
    id: "02",
    Question: "How much does shipping cost?",
    Answer:
      "It typically takes between 2-5 business days for you to receive your order.",
  },
  {
    id: "03",
    Question: "Will I be charged any VAT, duty, or import taxes?",
    Answer:
      "For customers in the European Union and United Kingdom. We ship from local warehouses so our customers will not be liable for any duties or taxes. For customers from other countries, you may be subject to additional duties or taxes upon receiving the product - we are not responsible for these charges.",
  },
  {
    id: "04",
    Question: "What if my products are damaged upon arrival?",
    Answer:
      "We want you to be 100% satisfied with your products. If anything in your order arrives damaged, drop us a line via our contact form and we will send you replacements free of charge.",
  },
];

const Products = [
  {
    id: "01",
    Question: "Will your plates fit in my dishwasher?",
    Answer:
      "Yes, our ceramics are 100% microwave, dishwasher, and oven safe up to 220 C/428 F. ",
  },
  {
    id: "02",
    Question: "Will your plates fit in my dishwasher?",
    Answer:
      "The height of the rim of our plates are 2cm (3/4in). They should fit in most dishwashers in the bottom rack. To be 100% certain, you should measure the width of the slots in your dishwasher.",
  },
  {
    id: "03",
    Question: "Do your ceramics scratch easily?",
    Answer:
      "No, our ceramics are designed to be durable and long-lasting. All matte ceramics are susceptible to temporary marks of metal residue left behind by cutlery after heavy use. This is due matte glazes being less smooth than glossy glazes, causing more friction on the surface. And also due to lower quality cutlery having not enough hardness to withstand the friction.",
  },
  {
    id: "04",
    Question: "Do your ceramics contain any lead or heavy metals?",
    Answer:
      "No. Our Ceramics are 100% free of lead and other harmful metals and chemicals.",
  },
];

const Returns = [
  {
    id: "01",
    Question: "What is your return policy? How do I return my products?",
    Answer:
      "We will happily accept returns within 30 days of receiving your product subject to our terms and conditions. Reach out via our contact form to submit a request.",
  },
];
import Layout from "@/components/Layout/Layout";

export default function FAQPage() {
  return (
    <Layout>
      <div>
        <div className="lg:w-9/12 md:w-9/12 sm:w-full sm:p-4 mx-auto mt-40 mb-40">
          <h2 className="text-text lg:text-3xl sm:text-2xl font-semibold mb-2 antialiased">
            Frequently Asked Questions
          </h2>
          <p className="text-text lg:text-base sm:text-sm lg:w-9/12 sm:w-full">
            We are confident you will love your products. We have listed a list
            of questions that may help you with any issues that may arise. In
            the case that your question is not answered below, feel free to
            shoot us a message through our contact form and we will get back to
            you within 24 hours.
          </p>
          <p className="mt-8">
            <Link href="/Contact-Us">
              <button className="py-3 px-14 bg-white text-xl text-text font-semibold antialiased">
                Contact Us
              </button>
            </Link>
          </p>
          <div className="mt-40">
            <Tab.Group>
              <Tab.List className="mb-4 border-b-2 border-slate-500/20 font-semibold">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button
                      className={
                        selected
                          ? "border-b-2 border-button text-button lg:py-2 lg:px-8 sm:py-2 sm:px-4 lg:text-xl md:text-xl sm:text-sm focus:boder-0 antialiased"
                          : "text-text lg:py-2 lg:px-8 sm:py-2 sm:px-4  lg:text-xl md:text-xl sm:text-sm hover:text-button antialiased"
                      }
                    >
                      Products
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button
                      className={
                        selected
                          ? "border-b-2 border-button text-button lg:py-2 lg:px-8 sm:py-2 sm:px-4  lg:text-xl md:text-xl sm:text-sm focus:outline-none antialiased"
                          : "text-text lg:py-2 lg:px-8 sm:py-2 sm:px-4 lg:text-xl md:text-xl sm:text-sm hover:text-button antialiased"
                      }
                    >
                      Shipping
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "border-b-2 border-button text-button lg:py-2 lg:px-8 sm:py-2 sm:px-4  lg:text-xl md:text-xl sm:text-sm focus:boder-0 antialiased"
                          : "text-text lg:py-2 lg:px-8 sm:py-2 sm:px-4 lg:text-xl md:text-xl sm:text-sm hover:text-button antialiased"
                      }
                    >
                      Returns
                    </button>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel className="mt-8">
                  {Products.map((product) => (
                    <div
                      className="lg:w-4/6 md:w-full sm:w-full"
                      key={Products.id}
                    >
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between lg:px-2 lg:py-2 sm:pb-2 sm:pt-2 text-left text-text text-xl font-medium focus:outline-none ">
                              <span className="font-semibold lg:text-base sm:text-xs antialiased">
                                {product.Question}
                              </span>
                              <PlusIcon
                                className={`${
                                  open ? "rotate-45 transform" : ""
                                } h-6 w-6 text-text`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="lg:px-4 lg:py-2 sm:px-0 sm:pb-4 text-base text-text">
                              <p className="lg:text-sm sm:text-xs font-medium antialiased">
                                {product.Answer}
                              </p>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <div className="border-b-2 border-slate-500/20 w-full"></div>
                    </div>
                  ))}
                </Tab.Panel>
                <Tab.Panel className="mt-8">
                  {Shipping.map((shipping) => (
                    <div
                      className="lg:w-4/6 md:w-full sm:w-full"
                      key={Shipping.id}
                    >
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between lg:px-2 lg:py-2 sm:pb-2 sm:pt-2 text-left text-text text-xl font-medium focus:outline-none ">
                              <span className="font-semibold lg:text-base sm:text-xs antialiased">
                                {shipping.Question}
                              </span>
                              <PlusIcon
                                className={`${
                                  open ? "rotate-45 transform" : ""
                                } h-6 w-6 text-text`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="lg:px-4 lg:py-2 sm:px-0 sm:pb-4 text-base text-text">
                              <p className="lg:text-sm sm:text-xs font-medium antialiased">
                                {shipping.Answer}
                              </p>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <div className="border-b-2 border-slate-500/20 w-full"></div>
                    </div>
                  ))}
                </Tab.Panel>
                <Tab.Panel className="mt-8">
                  {Returns.map((returns) => (
                    <div
                      className="lg:w-4/6 md:w-full sm:w-full"
                      key={Returns.id}
                    >
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between lg:px-2 lg:py-2 sm:pb-2 sm:pt-2 text-left text-text text-xl font-medium focus:outline-none ">
                              <span className="font-semibold lg:text-base sm:text-xs antialiased">
                                {returns.Question}
                              </span>
                              <PlusIcon
                                className={`${
                                  open ? "rotate-45 transform" : ""
                                } h-6 w-6 text-text`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="lg:px-4 lg:py-2 sm:px-0 sm:pb-4 text-base text-text">
                              <p className="lg:text-sm sm:text-xs font-medium antialiased">
                                {returns.Answer}
                              </p>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <div className="border-b-2 border-slate-500/20 w-full"></div>
                    </div>
                  ))}
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </Layout>
  );
}
