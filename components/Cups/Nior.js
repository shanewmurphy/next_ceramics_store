import { useState } from "react";

import NiorImages from "./Galleries/Nior-images";
// import FAQDinnerware from "./FAQ";

import { useCart } from "hooks/use-cart";

import products from "@/Data/products.json";

export default function Noir({ loadIvory, loadRose, loadOlive }) {
  const [buttonText, setButtonText] = useState("Add to Cart");
  const { addToCart } = useCart();

  const product = products.filter((_, index) => index === 12);

  // Set ID to Stripe price
  const id = "price_1NL1DbFRHqR6fk4WJqBthQRI";

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
      <div className="flex lg:w-11/12 md:w-11/12 sm:w-11/12 lg:flex-row md:flex-col sm:flex-col mx-auto lg:mt-20 md:mt20 sm:mt-24 mb-40 lg:gap-12 md:gap-6 sm:gap-4">
        <div className="lg:w-6/12">
          <div className="lg:w-560 mx-auto lg:mb-6 md:mb-0">
            <NiorImages />
          </div>
        </div>
        <div className="lg:w-6/12">
          {product.map((products) => {
            const {
              id,
              ProductTitle,
              Set,
              descriptionShort,
              price,
              Colour,
              Shipping,
            } = products;

            return (
              <div key={id}>
                <h2 className="text-text font-semibold lg:text-left md:text-center sm:text-center lg:text-3xl md:text-4xl sm:text-2xl antialiased">
                  {ProductTitle}
                  <span className="text-text lg:text-base md:text-lg sm:text-sm font-medium pl-2">
                    {Set}
                  </span>
                </h2>
                <h3 className="text-text font-bold lg:text-2xl md:text-xl sm:text-2xl lg:text-left md:text-center sm:text-center lg:mt-4 md:mt-6 sm:mt-4 antialiased">
                  €{price}
                  <span className="text-text font-medium text-sm pl-2">
                    Inc Vat
                  </span>
                </h3>
                <div className="w-1/2 mx-auto lg:mt-8 md:mt-6 sm:mt-6 lg:hidden md:block sm:block">
                  <div className="text-text text-center font-medium text-base antialiased">
                    Colour:<span className="pl-1">{Colour}</span>
                  </div>
                  {/* Colour swatches Mobile */}
                  <div className="mt-4 mx-auto text-center">
                    <ul className="inline-flex">
                      <li>
                        <button onClick={loadIvory}>
                          <span className="dot_black outline outline-offset-2 outline-2 outline-neutral-500"></span>
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
                          <span className="dot_maroon"></span>
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
                  {descriptionShort}
                </p>
                {/* Colour swatches Desktop */}
                <div className="lg:mt-8 md:mt-6 sm:mt-6 lg:block md:hidden sm:hidden">
                  <div className="text-text font-medium text-base antialiased">
                    Colour:<span className="pl-1">{Colour}</span>
                  </div>
                  <div className="mt-4">
                    <ul className="inline-flex text-center">
                      <li>
                        <button>
                          <span className="dot_black outline outline-offset-2 outline-2 outline-neutral-500"></span>
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
                          <span className="dot_maroon"></span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:mt-6 md:mt-6 sm:mt-4">
                  <h4 className="text-text font-semibold lg:text-sm md:text-base sm:text-sm antialiased">
                    {Shipping}
                  </h4>
                </div>
              </div>
            );
          })}
          <div>
            <div>
              {/* Checkout Desktop */}
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
              <div>{/* <FAQDinnerware /> */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
