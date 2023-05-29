import Image from "next/image";
import Link from "next/link";
export default function ColloectionSec() {
  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col w-11/12 mx-auto gap-16 mt-4 mb-40">
      <div className="basis-2/4 relative">
        <Image
          className="collection_imgs object-fill"
          src="/imgs/Collection_img-min.jpg"
          width={560}
          height={460}
          alt="Collection"
        />
        <div className="absolute z-10 w-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-3/4 text-center">
          <h6 className="text-white lg:text-5xl md:text-2xl sm:text-2xl font-semibold mb-2 antialiased">
            Irish Ceramics
          </h6>
          <Link href="#">
            <button className="text-center text-white font-bold text-xl antialiased">
              Shop Now
            </button>
          </Link>
        </div>
        <div></div>
      </div>
      <div className="basis-2/4 relative">
        <Image
          className="collection_imgs object-fill"
          src="/imgs/Pottery_classes_img-min.jpg"
          width={560}
          height={460}
          alt="pottery classes"
        />
        <div className="absolute z-10 left-1/2 w-96 transform -translate-x-1/2 -translate-y-1/2 top-3/4 text-center">
          <h6 className="text-white lg:text-5xl md:text-2xl sm:text-2xl font-semibold mb-2 antialiased">
            Pottery Classes
          </h6>
          <Link href="#">
            <button className="text-center text-white font-bold text-xl antialiased">
              View Classes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
