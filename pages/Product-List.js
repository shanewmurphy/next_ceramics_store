import Image from "next/image";
import Link from "next/link";
import Productlist from "@/Data/Productlist";
import Layout from "@/components/Layout/Layout";
export default function ProductList() {
  return (
    <Layout>
      <div>
        <div></div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-11/12 mx-auto lg:mt-16 md:mt-8 sm:mt-6 gap-x-4 lg:gap-y-8 md:gap-y-4 sm:gap-y-1 mb-60">
            {Productlist.map((product) => (
              <div key={product.id}>
                <div className="mt-6">
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
                        effect="blur"
                        alt={product.productName}
                      />
                    </div>
                  </Link>
                  <Link href={product.PageLinkUrl}>
                    <h2 className="text-center font-bold text-text lg:text-xl md:text-lg sm:text-sm mt-2 mb-1 antialiased">
                      {product.productName}
                    </h2>
                  </Link>
                  <p className="text-center text-text font-semibold sm:font-normal lg:text-lg md:text-sm sm:text-sm">
                    €{product.price}
                  </p>
                  <div className="text-center text-text lg:text-sm md:text-sm sm:text-xs"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
