export default function Colours() {
  return (
    <div className="w-1/2 mx-auto lg:mt-8 md:mt-6 sm:mt-6 lg:hidden md:block sm:block">
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
      <div className="lg:mt-8 md:mt-6 sm:mt-6 lg:block md:hidden sm:hidden">
        <div className="mt-2">
          <ul className="inline-flex mt-2">
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
    </div>
  );
}
