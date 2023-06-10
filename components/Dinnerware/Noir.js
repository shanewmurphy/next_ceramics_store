import { useState } from "react";

import NiorImages from "./Galleries/Nior-images";
import FAQDinnerware from "./FAQ";

import products from "./products.json";

// Stripe
import { initiateCheckout } from "@/lib/payments";

const defaultCart = {
  products: {},
};

const Noir = ({ loadIvory, loadRose, loadOlive }) => {
  const product = products.filter((_, index) => index === 0);

  // Set ID to Stripe price
  const id = "price_1NGNSUFRHqR6fk4W40bPDP0l";

  const [cart, updateCart] = useState(defaultCart);

  // console.log("product", product);
  console.log("cart", cart);

  const cartItems = Object.keys(cart.products).map((key) => {
    const product = products.find(({ id }) => `${id}` === `${key}`);
    return {
      ...cart.products[key],
      pricePerItem: product.price,
    };
  });

  console.log("cartItems", cartItems);

  const subtotal = cartItems.reduce(
    (accumulator, { pricePerItem, quantity }) => {
      return accumulator + pricePerItem * quantity;
    },
    0
  );

  console.log("subtotal", subtotal);

  const totalItems = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  function addToCart({ id } = {}) {
    updateCart((prev) => {
      let cartState = { ...prev };

      if (cartState.products[id]) {
        cartState.products[id].quantity = cartState.products[id].quantity + 1;
      } else {
        cartState.products[id] = {
          id,
          quantity: 1,
        };
      }
      return cartState;
    });
  }

  return (
    <div>
      <div>Items: {totalItems}</div>
      <div>Total Cost: {subtotal}</div>
      <div>
        <button>Checkout</button>
      </div>
      <div className="flex lg:w-11/12 md:w-11/12 sm:w-11/12 lg:flex-row md:flex-col sm:flex-col mx-auto mt-20 mb-40 lg:gap-12 md:gap-6 sm:gap-4">
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
              descriptionLong,
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
                        className="w-36 py-2 px-6 text-button border-2 border-button"
                        onClick={() => {
                          addToCart({
                            id,
                          });
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div>
                      <button
                        className="w-40 py-2 px-6 border-2 text-white border-button bg-button"
                        onClick={() => {
                          initiateCheckout({
                            lineItems: [
                              {
                                price: id,
                                quantity: 1,
                              },
                            ],
                          });
                        }}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-text font-medium text-sm lg:mt-4 md:mt-6 sm:mt-4 antialiased">
                  {descriptionShort}
                </p>
                <p className="text-text font-medium text-sm lg:mt-4 md:mt-6 sm:mt-4 antialiased">
                  {descriptionLong}
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
                      className="lg:px-20 lg:py-4 md:px-20 md:py-4 text-center text-button border-2 border-button"
                      onClick={() => {
                        addToCart({
                          id,
                        });
                      }}
                    >
                      Add to Cart
                    </button>
                  </li>
                  <li className="ml-6">
                    <button
                      className="lg:px-20 lg:py-4 md:px-20 md:py-4 text-center text-white border-2 border-button bg-button"
                      onClick={() => {
                        initiateCheckout({
                          lineItems: [
                            {
                              price: id,
                              quantity: 1,
                            },
                          ],
                        });
                      }}
                    >
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
  );
};

export default Noir;
