import Image from "next/image";

import Cart from "./Cart";
import NavMobile from "./Nav-Menu";
export default function NavMain() {
  return (
    <div>
      <div className="w-full fixed top-0 z-10 lg:block md:block sm:hidden">
        <div className="w-full bg-sand text-sm py-2 text-center antialiased">
          Free shipping orders over €70
        </div>
        <div>
          <div className="w-full bg-navBg">
            <div className="flex w-11/12 h-14 mx-auto justify-between items-center">
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
          <div className="flex justify-between items-center bg-navBg h-12 px-4">
            <div>
              <NavMobile />
            </div>
            <div>LOGO</div>
            <div>
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
