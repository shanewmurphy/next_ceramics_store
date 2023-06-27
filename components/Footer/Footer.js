import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";

import { PlusIcon } from "@heroicons/react/20/solid";
export default function Footer() {
  return (
    <div>
      <div className="w-screen bg-green">
        <div className="flex basis-11/12 justify-between flex-row lg:flex-row md:flex-col sm:flex-col lg:py-20 lg:px-16 md:py-20 md:px-12 sm:py-8 sm:px-6 mx-auto lg:gap-16 md:gap-16 sm:gap-8">
          <div className="lg:basis-2/5 md:basis-11/12 sm:basis-11/12">
            <h3 className="text-white lg:text-3xl md:text-4xl sm:text-xl font-semibold antialiased">
              We bring quality artisanal goods from around the world right to
              your doorstep. Always ethically sourced and sustainably crafted.
            </h3>
          </div>
          <div className="lg:basis-3/5 md:basis-11/12 sm:basis-11/12 flex-row">
            <div className="grid grid-cols-3 lg:justify-end gap-16 lg:flex md:flex sm:hidden">
              <div className="basis-1/4">
                <ul className="text-white font-noraml text-base antialiased">
                  <li className="font-medium text-xl">Shop</li>
                  <li>
                    <Link href="#" className="hover:text-text">
                      Ceramics
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-text">
                      Dinnerware Sets
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-text">
                      Plates
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-text">
                      Bowels
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="basis-1/4">
                <ul className="text-white font-noraml text-base antialiased">
                  <li className="font-medium text-xl">About</li>
                  <li>Our Story</li>
                  <li>Sustainability</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="basis-1/4">
                <ul className="text-white font-noraml text-base antialiased">
                  <li className="font-medium text-xl">Help</li>
                  <li>FAQ</li>
                  <li>Terms</li>
                </ul>
              </div>
            </div>
            <div className="lg:hidden md:hidden sm:flex mb-4">
              <div className="w-full mx-auto">
                <div>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full mt-4 justify-between pb-2 text-left text-sm font-medium text-white focus:outline-none">
                          <span className="text-base antialiased">Shop</span>
                          <PlusIcon
                            className={`${
                              open ? "rotate-45 transform" : ""
                            } h-5 w-5 mt-2 text-white`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pb-4 text-sm text-gray-500">
                          <ul className="text-white font-noraml text-base antialiased">
                            <li className="mb-2">
                              <Link
                                href="#"
                                className="hover:text-text text-sm"
                              >
                                Ceramics
                              </Link>
                            </li>
                            <li className="mb-2">
                              <Link
                                href="#"
                                className="hover:text-text text-sm"
                              >
                                Dinnerware
                              </Link>
                            </li>
                            <li className="mb-2">
                              <Link
                                href="#"
                                className="hover:text-text text-sm"
                              >
                                Plates
                              </Link>
                            </li>
                            <li className="mb-2">
                              <Link
                                href="#"
                                className="hover:text-text text-sm"
                              >
                                Bowels
                              </Link>
                            </li>
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <div className="border-b-2 border-white/20 mt-2"></div>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full mt-4 justify-between pb-2 text-left text-sm font-medium text-white focus:outline-none">
                          <span className="text-base antialiased">About</span>
                          <PlusIcon
                            className={`${
                              open ? "rotate-45 transform" : ""
                            } h-5 w-5 mt-1 text-white`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pb-4 text-sm text-gray-500">
                          <ul className="text-white font-noraml text-base antialiased">
                            <li className="mb-2">
                              <Link
                                href="/"
                                className="hover:text-text text-sm"
                              >
                                Our Story
                              </Link>
                            </li>
                            <li className="mb-2">
                              <Link
                                href="/"
                                className="hover:text-text text-sm"
                              >
                                Sustainability
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/"
                                className="hover:text-text text-sm"
                              >
                                Contact Us
                              </Link>
                            </li>
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <div className="border-b-2 border-white/20 mt-2"></div>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full mt-4 justify-between pb-2 text-left text-sm font-medium text-white focus:outline-none">
                          <span className="text-base antialiased">Help</span>
                          <PlusIcon
                            className={`${
                              open ? "rotate-45 transform" : ""
                            } h-5 w-5 mt-1 text-white`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pb-4 text-sm text-gray-500">
                          <ul className="text-white font-noraml text-base antialiased">
                            <li className="mb-2">
                              <Link
                                href="/"
                                className="hover:text-text text-sm"
                              >
                                FAQ
                              </Link>
                            </li>
                            <li className="mb-2">
                              <Link
                                href="/"
                                className="hover:text-text text-sm"
                              >
                                Terms
                              </Link>
                            </li>
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <div className="border-b-2 border-white/20 mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-11/12 justify-between mx-auto pb-8 pt-4 border-t-2 border-stone-300">
          <div>
            <ul className="inline-flex">
              <li>
                <Image
                  src="/imgs/Mastercard.svg"
                  width={71}
                  height={32}
                  alt="Mastercard icon"
                />
              </li>
              <li className="pl-4">
                <Image
                  src="/imgs/Visa.svg"
                  width={71}
                  height={32}
                  alt="Visa icon"
                />
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white text-xs pt-3">Made by Shane</p>
          </div>
        </div>
      </div>
    </div>
  );
}
