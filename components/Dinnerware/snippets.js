const [cart, updateCart] = useState(defaultCart);

console.log("cart", cart);

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


<div key={product.id}>
              <h2 className="text-text font-semibold lg:text-left md:text-center sm:text-center lg:text-3xl md:text-4xl sm:text-2xl antialiased">
                {product.ProductTitle}
                <span className="text-text lg:text-base md:text-lg sm:text-sm font-medium pl-2">
                  {product.Set}
                </span>
              </h2>
              <h3 className="text-text font-bold lg:text-2xl md:text-xl sm:text-2xl lg:text-left md:text-center sm:text-center lg:mt-4 md:mt-6 sm:mt-4 antialiased">
                {product.price}
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
                  {product.Shipping}
                </h4>
              </div>
            </div>