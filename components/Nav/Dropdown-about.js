import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function AboutDropdown() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center px-4 py-2 text-base font-medium text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            About
            <ChevronDownIcon
              className="-mr-2 mt-1 h-5 w-5 text-text"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-navBg shadow-lg antialiased">
            <div className="px-2 py-2">
              <Menu.Item>
                <button className="group flex w-full items-center mb-2 rounded-md px-2 py-2 text-text font-semibold text-base hover:bg-background antialiased">
                  <Link href="/Our-Story">Our Story</Link>
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group flex w-full items-center mb-2 rounded-md px-2 py-2 text-text font-semibold text-base hover:bg-background  antialiased">
                  <Link href="/FAQ">FAQs</Link>
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group flex w-full items-center mb-2 rounded-md px-2 py-2 text-text font-semibold text-base hover:bg-background  antialiased">
                  <Link href="/Contact-Us">Contact Us</Link>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
