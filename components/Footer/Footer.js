import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <div className="w-screen bg-green">
        <div className="flex w-11/12 py-20 mx-auto gap-12">
          <div className="w-6/12">
            <h3 className="text-white text-3xl font-semibold antialiased">
              We bring quality artisanal goods from around the world right to
              your doorstep. Always ethically sourced and sustainably crafted.
            </h3>
          </div>
          <div className="flex w-6/12 flex-row justify-around gap-6">
            <div className="w-2/12">
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
            <div className="w-2/12">
              <ul className="text-white font-noraml text-base antialiased">
                <li className="font-medium text-xl">About</li>
                <li>Our Story</li>
                <li>Artisan</li>
                <li>Sustainability</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="w-2/12">
              <ul className="text-white font-noraml text-base antialiased">
                <li className="font-medium text-xl">Help</li>
                <li>FAQ</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-11/12 justify-between mx-auto pb-8">
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
          <div>BB</div>
        </div>
      </div>
    </div>
  );
}
