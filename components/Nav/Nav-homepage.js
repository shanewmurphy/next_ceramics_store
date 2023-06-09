export default function NavHomepage() {
  return (
    <div className="absolute z-10 inset-x-10 lg:block md:block sm:hidden">
      <div className="flex justify-between pt-4">
        <div>
          <nav>
            <div>
              <ul className="inline-flex items-center">
                <li className="text-Nav font-medium text-lg antialiased">
                  Shop
                </li>
                <li className="pl-4 text-Nav font-medium text-lg antialiased">
                  About
                </li>
                <li className="pl-4 text-Nav font-medium text-lg antialiased">
                  Sustainability
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex items-center text-Nav">Cart</div>
      </div>
    </div>
  );
}
