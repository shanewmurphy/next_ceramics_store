import Link from "next/link";
import Image from "next/image";

export default function NavMain() {
  return (
    <div>
      <div className="w-11/12 mx-auto mt-4">
        <div className="flex justify-between items-center">
          <div>
            <nav>
              <ul className="inline-flex">
                <li>Shop</li>
                <li className="pl-4">About</li>
                <li className="pl-4">Sustainability</li>
              </ul>
            </nav>
          </div>
          <div>BB</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
