import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars2Icon } from "@heroicons/react/20/solid";
import Link from "next/link";

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
                              <Link
                                href="/Dinnerware-Collection"
                                className="hover:text-button"
                              >
                                Dinnerware Sets
                              </Link>
                            </li>
                            <li className="mt-3">
                              <Link
                                href="/Plates-Collection"
                                className="hover:text-button"
                              >
                                Big Plates
                              </Link>
                            </li>
                            <li className="mt-3">
                              <Link
                                href="/Bowels-Collection"
                                className="hover:text-button"
                              >
                                Bowels
                              </Link>
                            </li>
                            <li className="mt-3 mb-6">
                              <Link
                                href="/Cups-Collection"
                                className="hover:text-button"
                              >
                                Cups
                              </Link>
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
                              <Link
                                href="/Our-Story"
                                className="hover:text-button"
                              >
                                Our Story
                              </Link>
                            </li>
                            <li className="mt-3">
                              <Link
                                href="/Sustainability"
                                className="hover:text-button"
                              >
                                Sustainability
                              </Link>
                            </li>
                            <li className="mt-3">
                              <Link href="/FAQ" className="hover:text-button">
                                FAQ
                              </Link>
                            </li>
                            <li className="mt-3">
                              <Link
                                href="/Contact-Us"
                                className="hover:text-button"
                              >
                                Contact Us
                              </Link>
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

function Logo() {
  return (
    <svg
      width="37"
      height="40"
      viewBox="0 0 37 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.7991 13.9431C36.6288 13.8671 36.4253 13.9413 36.3473 14.1116C35.2659 16.476 33.1187 19.8947 29.0305 22.7578C24.2911 26.0778 18.3658 25.2311 16.3912 24.3347C15.766 24.0511 15.61 23.8533 15.623 23.6791C18.0642 24.2196 19.8739 24.3164 20.8478 24.3164C21.3385 24.3164 21.6173 24.292 21.6576 24.288C21.8454 24.2702 21.9826 24.1053 21.9651 23.9191C21.9476 23.7329 21.7782 23.5947 21.5931 23.6138C21.5617 23.6164 18.8718 23.84 14.607 22.732C13.7582 22.4831 13.276 22.3076 13.2809 22.2089C13.3015 21.7987 13.7488 21.6662 14.1884 21.7662C17.197 22.4373 19.3693 22.5671 20.5928 22.5671C21.3076 22.5671 21.6993 22.5231 21.7455 22.5178C21.9328 22.4951 22.0659 22.3267 22.0435 22.1413C22.0207 21.9556 21.8468 21.8227 21.6644 21.8453C21.6312 21.8489 18.33 22.2058 12.6077 20.6778C12.6028 20.6738 12.5925 20.6684 12.5894 20.6644C12.5257 20.2987 12.856 19.9827 13.3633 20.0458C14.789 20.2236 18.1157 20.6636 19.4966 20.6636C20.8886 20.6636 21.6424 20.5391 21.7078 20.528C21.8938 20.496 22.018 20.3204 21.9857 20.136C21.9539 19.952 21.7778 19.828 21.5904 19.8604C21.5595 19.8658 18.5845 20.3556 13.2482 19.3236C13.2186 19.3187 13.2163 19.2689 13.2199 19.2369C13.2576 18.9 13.505 18.4609 15.0807 18.5422C17.4032 18.6596 18.6553 18.7409 20.5453 18.3751C22.7584 17.9418 24.1791 17.5804 24.2656 17.2369C24.3113 17.0427 24.0787 16.9253 23.8555 16.9342C21.5877 17.0471 20.6246 17.0356 19.5521 16.6631C19.0179 16.4778 18.3524 16.0373 18.2601 15.5129C18.2448 15.4258 18.3062 15.3449 18.3954 15.3493C18.6943 15.3649 19.2433 15.3791 19.7798 15.3716C23.8008 15.3218 25.1171 14.1342 28.1131 14.2516C29.8206 14.3191 30.2119 14.6 30.8227 14.9378C31.3036 15.2036 31.6438 14.7596 31.3238 14.292C31.2646 14.2244 31.1508 14.0889 31.1508 14.0889C27.0151 9.48356 24.1961 7.424 23.8864 1.21022H23.8819C23.8183 0.537333 22.1063 0 19.9976 0C17.8845 0 16.1725 0.537333 16.1088 1.21022H16.1044C15.7992 7.424 12.9761 9.48356 8.8413 14.0898C8.84578 14.0898 8.84578 14.0898 8.84578 14.0898C6.46868 16.7182 5.02064 20.1862 5.02064 23.9978C5.02064 24.664 5.0677 25.3182 5.15644 25.9618C5.20439 26.3107 5.52708 26.5507 5.8762 26.4876C6.39115 26.3942 7.19517 26.3289 8.14888 26.5311C11.4183 27.2173 12.6162 28.8431 16.1864 29.656C16.6829 29.7702 17.193 29.8884 17.4305 29.9409C17.5148 29.9596 17.5609 30.0458 17.5385 30.1284C17.396 30.6449 16.4822 30.9071 15.9269 30.9524C14.8979 31.0382 13.8366 31.0067 11.6643 30.3382C11.455 30.2796 11.2 30.3338 11.1951 30.5324C11.1951 30.8893 12.4473 31.6209 14.5331 32.4742C15.9995 33.0702 17.5112 33.5084 19.7883 33.9644C21.3368 34.276 21.4188 34.732 21.382 35.1658C21.3784 35.1689 21.3713 35.1787 21.3645 35.188C15.9497 34.8751 13.1765 33.6689 13.1473 33.656C12.9752 33.5791 12.7736 33.656 12.696 33.8262C12.6185 33.9969 12.6951 34.1969 12.8672 34.2738C12.9873 34.3276 15.8341 35.5711 21.0728 35.8613C21.5828 35.9111 21.7827 36.3302 21.6702 36.6347C21.6662 36.6458 21.6612 36.6591 21.6388 36.6578C15.7171 36.732 12.6109 35.5724 12.5795 35.5609C12.4038 35.4929 12.2057 35.58 12.1376 35.7542C12.0695 35.9284 12.1569 36.1244 12.3326 36.1924C12.4504 36.2378 15.9354 37.2093 19.843 37.3222C19.8452 37.3222 20.7756 37.3467 20.6533 38.1182C15.3492 38.3804 12.2371 37.3031 12.2057 37.292C12.0296 37.2289 11.8328 37.3204 11.7692 37.4964C11.7056 37.6724 11.7979 37.8662 11.9749 37.9293C12.0834 37.968 14.2081 38.7058 17.9728 38.8222C17.9665 38.8547 17.7406 39.1493 17.0639 39.2702C14.9261 39.6516 8.97575 39.0147 5.2147 34.6333C1.87 30.736 0.440338 26.2427 0.716411 20.492C0.725374 20.3053 0.579719 20.1467 0.391487 20.1378C0.386109 20.1378 0.380731 20.1373 0.374905 20.1373C0.193844 20.1373 0.0428103 20.2787 0.0342951 20.46C-0.250293 26.3929 1.23046 31.036 4.69482 35.0716C7.91672 38.8253 12.705 40 15.714 40C16.4373 40 16.9855 39.9302 17.4511 39.8013C18.4783 39.5173 18.6549 38.8898 18.6657 38.8342C18.7678 38.8351 19.8372 38.8458 19.9981 38.8458C28.2677 38.8458 34.971 32.1982 34.971 23.9973C34.971 22.2369 34.6564 20.5524 34.0921 18.988C35.4559 17.3147 36.3724 15.6969 36.9694 14.3916C37.0474 14.2213 36.9712 14.0204 36.7991 13.9431ZM19.9976 0.691111C21.4775 0.691111 22.6754 0.984444 22.6754 1.35067C22.6754 1.71689 21.4779 2.00978 19.9976 2.00978C18.5178 2.00978 17.3153 1.71644 17.3153 1.35067C17.3153 0.984889 18.5178 0.691111 19.9976 0.691111Z"
        fill="white"
      />
    </svg>
  );
}
