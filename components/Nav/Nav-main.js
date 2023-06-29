import Image from "next/image";
import Link from "next/link";

import Cart from "./Cart";
import NavMobile from "./Nav-Menu";
import DropdownMenu from "./Dropdown";
import DropdownAbout from "./Dropdown-about";

export default function NavMain() {
  return (
    <div>
      <div className="w-full fixed top-0 z-10 lg:block md:block sm:hidden">
        <div className="w-full bg-sand  py-2 text-center">
          <h4 className="font-bold text-text text-sm antialiased">
            Free shipping orders over €70
          </h4>
        </div>
        <div>
          <div className="w-full bg-navBg">
            <div className="flex w-11/12 h-14 mx-auto justify-between items-center">
              <div>
                <nav>
                  <ul className="inline-flex">
                    <li>
                      <DropdownMenu />
                    </li>
                    <li>
                      <DropdownAbout />
                    </li>
                    <li className="pl-4 pt-2 text-base font-medium text-text">
                      <Link href="/Sustainability">Sustainability</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <Link href="/">LOGO</Link>
              <div>
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden md:hidden sm:flex">
        <div className="w-full fixed top-0 z-10">
          <div className="w-full text-center bg-sand py-2 text-xs antialiased">
            Free shipping orders over €70
          </div>
          <div className="flex justify-between items-center bg-navBg h-12 px-6">
            <div>
              <NavMobile />
            </div>
            <div>
              <Link href="/">LOGO</Link>
            </div>
            <div>
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
