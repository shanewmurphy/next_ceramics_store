import { useState } from "react";

import RoseImages from "./Galleries/Rose-images";
import FAQBowels from "./FAQ-Bowels";

import products from "@/Data/products.json";

import { useCart } from "hooks/use-cart";

const Rose = ({ loadNoir, loadIvory, loadOlive, loadRose }) => {
  const [buttonText, setButtonText] = useState("Add to Cart");
  const { addToCart } = useCart();
  const filteredProduct = products.filter((_, index) => index === 7);

  // Set ID to Stripe price
  const id = "price_1NKjeKFRHqR6fk4Wpa64DRuw";

  const handleAddToCart = () => {
    setButtonText("Added");
    setTimeout(() => {
      setButtonText("Add to Cart");
    }, 2000);

    addToCart({
      id: id,
    });
  };

  return (
    <div>
      <div className="flex lg:w-11/12 md:w-11/12 sm:w-11/12 lg:flex-row md:flex-col sm:flex-col mx-auto lg:mt-40 md:mt20 sm:mt-32 mb-40 lg:gap-12 md:gap-6 sm:gap-4">
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
                  €{product.price}
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
                      <button
                        className="w-72 py-4 text-lg text-center font-semibold text-white bg-button antialiased"
                        onClick={handleAddToCart}
                      >
                        {buttonText}
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
                      <button
                        className="w-80 py-4 text-lg font-semibold text-center text-white bg-button antialiased"
                        onClick={handleAddToCart}
                      >
                        {buttonText}
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <FAQBowels />
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
