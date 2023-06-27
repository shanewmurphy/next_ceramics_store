import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars2Icon } from "@heroicons/react/20/solid";

export default function NavMobile() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <Bars2Icon
          className="h-8 w-8 text-neutral-600 hover:text-neutral-500 cursor-pointer relative"
          onClick={() => setOpen(true)}
        />
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="-transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="-translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="-translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-72 max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-button hover:text-text"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-background py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        {/* <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Panel title
                        </Dialog.Title> */}
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="border-b-2 border-sand/40">
                          <h4 className="font-semibold text-xl text-text antialiased">
                            Shop
                          </h4>
                          <ul className="ml-2 mt-2 font-medium text-base text-text antialiased">
                            <li>
                              <a
                                href="/Dinnerware-Collection"
                                className="hover:text-button"
                              >
                                Dinnerware Sets
                              </a>
                            </li>
                            <li className="mt-2">
                              <a
                                href="/Plates-Collection"
                                className="hover:text-button"
                              >
                                Big Plates
                              </a>
                            </li>
                            <li className="mt-2">
                              <a
                                href="/Bowels-Collection"
                                className="hover:text-button"
                              >
                                Bowels
                              </a>
                            </li>
                            <li className="mt-2 mb-4">
                              <a
                                href="/Cups-Collection"
                                className="hover:text-button"
                              >
                                Cups
                              </a>
                            </li>
                            <div className="divide-y"></div>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl text-text mt-4 antialiased">
                            About
                          </h4>
                          <ul className="ml-2 mt-2 font-medium text-base text-text antialiased">
                            <li>
                              <a href="/" className="hover:text-button">
                                Our Story
                              </a>
                            </li>
                            <li className="mt-2">
                              <a href="/" className="hover:text-button">
                                Sustainability
                              </a>
                            </li>
                            <li className="mt-2">
                              <a href="/" className="hover:text-button">
                                FAQ
                              </a>
                            </li>
                            <li className="mt-2">
                              <a href="/" className="hover:text-button">
                                Contact Us
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}