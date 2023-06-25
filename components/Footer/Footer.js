import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <div className="w-screen bg-green">
        <div className="flex basis-11/12 justify-between flex-row lg:flex-row md:flex-col sm:flex-col py-20 px-16 mx-auto gap-16">
          <div className="lg:basis-2/5 md:basis-11/12 sm:basis-11/12">
            <h3 className="text-white text-3xl font-semibold antialiased">
              We bring quality artisanal goods from around the world right to
              your doorstep. Always ethically sourced and sustainably crafted.
            </h3>
          </div>
          <div className="lg:basis-3/5 md:basis-11/12 sm:basis-11/12 flex-row">
            <div className="grid grid-cols-3 gap-4">
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
                      Dinnerware
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
                  <li>Artisan</li>
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
          </div>
        </div>
      </div>
    </div>
  );
}
