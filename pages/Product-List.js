import Image from "next/image";
import Productlist from "@/Data/Productlist";

export default function ProductList() {
  return (
    <div>
      <div>
        <div></div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-11/12 mx-auto lg:mt-16 md:mt-8 sm:mt-6 gap-x-6 lg:gap-y-8 md:gap-y-4 sm:gap-y-4">
            {Productlist.map((product) => (
              <div key={product.id} className="mt-6">
                <Image
                  src={product.productImgUrl}
                  width={500}
                  height={500}
                  alt={product.productName}
                />
                <h2 className="text-center lg:font-bold sm:font-semibold text-text lg:text-lg md:text-lg sm:text-xs mt-2 antialiased">
                  {product.productName}
                </h2>
                <p className="text-center text-text lg:font-medium sm:font-normal lg:text-sm md:text-sm sm:text-xs">
                  €{product.price}
                </p>
                <div className="text-center">Colours</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
