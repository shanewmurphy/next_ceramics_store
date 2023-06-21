import Image from "next/image";
import Link from "next/link";
import Productlist from "@/Data/Productlist";

export default function ProductList() {
  return (
    <div>
      <div>
        <div></div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-11/12 mx-auto lg:mt-16 md:mt-8 sm:mt-6 gap-x-6 lg:gap-y-8 md:gap-y-4 sm:gap-y-1 mb-60">
            {Productlist.map((product) => (
              <div>
                <div key={product.id} className="mt-6">
                  <Link
                    href={product.PageLinkUrl}
                    className="Link_container_productPge"
                  >
                    <div className="relative">
                      <button className="btn lg:text-2xl md:text-xl sm:text-xs font-semibold antialiased">
                        Shop
                      </button>
                      <Image
                        src={product.productImgUrl}
                        width={500}
                        height={500}
                        alt={product.productName}
                      />
                    </div>
                  </Link>
                  <Link href={product.PageLinkUrl}>
                    <h2 className="text-center font-bold text-text lg:text-lg md:text-lg sm:text-sm mt-2 mb-1 antialiased">
                      {product.productName}
                    </h2>
                  </Link>
                  <p className="text-center text-text lg:font-medium sm:font-normal lg:text-sm md:text-sm sm:text-xs">
                    €{product.price}
                  </p>
                  <div className="text-center">Colours</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
