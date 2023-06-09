import { useState } from "react";

import RoseImages from "./Galleries/Rose-images";
import FAQDinnerware from "./FAQ";

import products from "./products.json";

const Rose = ({ loadNoir, loadIvory, loadOlive, loadRose }) => {
  const filteredProduct = products.filter((_, index) => index === 3);
  const {
    ProductTitle,
    Set,
    Price,
    Colour,
    Shiiping,
    descriptionShort,
    descriptionLong,
    id,
  } = products;
  return (
    <div>
      <div className="flex lg:w-11/12 md:w-11/12 sm:w-11/12 lg:flex-row md:flex-col sm:flex-col mx-auto mt-20 mb-40 lg:gap-12 md:gap-6 sm:gap-4">
        <div className="lg:w-6/12">
          <div className="lg:w-560 mx-auto lg:mb-6 md:mb-0">
            <div>
              <RoseImages />
            </div>
          </div>
        </div>
        <div className="lg:w-6/12">
          <div>
            {filteredProduct.map((product) => (
              <div key={product.id}>
                <h2 className="text-text font-semibold lg:text-left md:text-center sm:text-center lg:text-3xl md:text-4xl sm:text-2xl antialiased">
                  {product.ProductTitle}
                  <span className="text-text lg:text-base md:text-lg sm:text-sm font-medium pl-2">
                    {product.Set}
                  </span>
                </h2>
                <h3 className="text-text font-bold lg:text-2xl md:text-xl sm:text-2xl lg:text-left md:text-center sm:text-center lg:mt-4 md:mt-6 sm:mt-4 antialiased">
                  {product.Price}
                  <span className="text-text font-medium text-sm pl-2">
                    Inc Vat
                  </span>
                </h3>
                <div className="w-1/2 mx-auto lg:mt-8 md:mt-6 sm:mt-6 lg:hidden md:block sm:block">
                  <div className="text-text text-center font-medium text-base antialiased">
                    Colour:<span className="pl-1">{product.Colour}</span>
                  </div>
                  {/* Colour swatches Mobile */}
                  <div className="mt-4 mx-auto text-center">
                    <ul className="inline-flex">
                      <li>
                        <button onClick={loadNoir}>
                          <span className="dot_black"></span>
                        </button>
                      </li>
                      <li className="pl-6">
                        <button onClick={loadIvory}>
                          <span className="dot_white"></span>
                        </button>
                      </li>
                      <li className="pl-6">
                        <button onClick={loadOlive}>
                          <span className="dot_olive"></span>
                        </button>
                      </li>
                      <li className="pl-6">
                        <button onClick={loadRose}>
                          <span className="dot_maroon outline outline-offset-2 outline-2 outline-neutral-500"></span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  {/* Checkout button mobile */}
                  <div className="flex flex-row justify-center lg:hidden md:hidden sm:flex mx-auto mt-6 mb-6 gap-2">
                    <div>
                      <button className="w-36 py-2 px-6 text-button border-2 border-button">
                        Add to Cart
                      </button>
                    </div>
                    <div>
                      <button className="w-40 py-2 px-6 border-2 text-white border-button bg-button">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-text font-medium text-sm lg:mt-4 md:mt-6 sm:mt-4 antialiased">
                  {product.descriptionShort}
                </p>
                <p className="text-text font-medium text-sm lg:mt-4 md:mt-6 sm:mt-4 antialiased">
                  {product.descriptionLong}
                </p>
                {/* Colour swatches Desktop */}
                <div className="lg:mt-8 md:mt-6 sm:mt-6 lg:block md:hidden sm:hidden">
                  <div className="text-text font-medium text-base antialiased">
                    Colour:<span className="pl-1">{product.Colour}</span>
                  </div>
                  <div className="mt-2">
                    <ul className="inline-flex mt-2">
                      <li>
                        <button onClick={loadNoir}>
                          <span className="dot_black"></span>
                        </button>
                      </li>
                      <li className="pl-6">
                        <button onClick={loadIvory}>
                          <span className="dot_white"></span>
                        </button>
                      </li>
                      <li className="pl-6">
                        <button onClick={loadOlive}>
                          <span className="dot_olive"></span>
                        </button>
                      </li>
                      <li className="pl-6">
                        <button onClick={loadRose}>
                          <span className="dot_maroon outline outline-offset-2 outline-2 outline-neutral-500"></span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:mt-6 md:mt-6 sm:mt-4">
                  <h4 className="text-text font-semibold lg:text-sm md:text-base sm:text-sm antialiased">
                    {product.Shipping}
                  </h4>
                </div>
              </div>
            ))}
            <div>
              <div>
                <div className="flex lg:text-left sm:text-center md:text-center lg:row md:row sm:col mt-6 lg:block md:block sm:hidden">
                  <ul className="lg:inline-flex md:inline-flex mt-4">
                    <li>
                      <button className="lg:px-20 lg:py-4 md:px-20 md:py-4 text-center text-button border-2 border-button">
                        Add to Cart
                      </button>
                    </li>
                    <li className="ml-6">
                      <button className="lg:px-20 lg:py-4 md:px-20 md:py-4 text-center text-white border-2 border-button bg-button">
                        Checkout
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <FAQDinnerware />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rose;
