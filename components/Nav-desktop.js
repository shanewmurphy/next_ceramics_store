export default function NavDesktop() {
  return (
    <div className="absolute z-10 inset-x-10">
      <div className="flex justify-between pt-4">
        <div>
          <nav>
            <div>
              <ul className="inline-flex items-center">
                <li className="text-white font-extrabold text-3xl antialiased">
                  LOGO
                </li>
                <li className="pl-4 text-white font-medium text-lg antialiased">
                  Shop
                </li>
                <li className="pl-4 text-white font-medium text-lg antialiased">
                  About
                </li>
                <li className="pl-4 text-white font-medium text-lg antialiased">
                  Sustainability
                </li>
                <li className="pl-4 text-white font-medium text-lg antialiased">
                  Pottery Classes
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex items-center text-white">Cart</div>
      </div>
    </div>
  );
}
