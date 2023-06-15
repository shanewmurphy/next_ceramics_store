import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import products from "@/Data/products.json";
import { useCart } from "@/hooks/use-cart";

export default function NavMain() {
  const { totalItems, checkout, subtotal, cartItems, removeFromCart } =
    useCart();

  const data = cartItems.map((item) => {
    const product = products.find(({ id }) => id === item.id);

    return {
      ...item,
      total: item.quantity * item.pricePerItem,
      title: product.ProductTitle,
      colour: product.Colour,
      price: product.price,
      CartImageUrl: product.CartImageUrl,
    };
  });

  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="w-11/12 mx-auto mt-4">
        <div className="flex justify-between items-center">
          <div>
            <nav>
              <ul className="inline-flex">
                <li>Shop</li>
                <li className="pl-4">About</li>
                <li className="pl-4">Sustainability</li>
              </ul>
            </nav>
          </div>
          <div>BB</div>
          <div>
            <ShoppingBagIcon
              className="h-8 w-8 text-neutral-600 hover:text-neutral-500 cursor-pointer relative"
              onClick={() => setOpen(true)}
            />
            <span className="absolute top-12 right-10 rounded-full text-sm bg-button text-white text-center align-middle w-6 h-6">
              {totalItems}
            </span>
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
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-in-out duration-500"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in-out duration-500"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="absolute right-0 top-2 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                            <button
                              type="button"
                              className="text-button hover:text-amber-70"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-8 w-8"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </Transition.Child>
                        <div className="flex h-full flex-col overflow-y-scroll bg-background py-6 shadow-xl">
                          <div className="px-4 sm:px-6">
                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                              Your Cart
                            </Dialog.Title>
                          </div>
                          <div className="relative lg:w-10/12 md:w-80 sm:w-80 mx-auto mt-6 flex-1">
                            {data.map((item) => {
                              return (
                                <div key={item.title}>
                                  <div className="flex flex-row gap-4 mb-4">
                                    <div className="basis-1/3 text-center">
                                      <Image
                                        className="img_fill rounded-lg"
                                        src={item.CartImageUrl}
                                        width={100}
                                        height={100}
                                        alt={item.ProductTitle}
                                      />
                                    </div>
                                    <div className="basis-2/3">
                                      <h4 className="lg:text-base md:text-base sm:text-sm font-semibold text-gray align-top mb-1">
                                        {item.title}
                                      </h4>
                                      <h5 className="text-xs font-medium text-gray mb-1">
                                        Colour: {item.colour}
                                      </h5>
                                      <h5 className="lg:text-base md:text-base sm:text-sm font-medium text-gray mb-1">
                                        €{item.price}
                                      </h5>
                                      <h5 className="text-sm text-gray mb-2">
                                        Qty: {item.quantity}
                                      </h5>
                                      <h6 className="text-right text-sm underline">
                                        <button
                                          onClick={() =>
                                            removeFromCart({ id: item.id })
                                          }
                                        >
                                          Remove
                                        </button>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            <div className="flex flex-col lg:w-full md:w-80 sm:w-full mx-auto absolute bottom-0 mb-12">
                              <div className="flex justify-between mb-4">
                                <div>Total</div>
                                <div>€{subtotal}</div>
                              </div>
                              <div>
                                <button
                                  className="w-full bg-button text-xl font-bold text-white mx-auto py-4 antialiased"
                                  onClick={checkout}
                                >
                                  Checkout Now
                                </button>
                              </div>
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
      </div>
    </div>
  );
}
