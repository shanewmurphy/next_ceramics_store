import Image from "next/image";
export default function Hero() {
  return (
    <div>
      <div className="relative">
        <Image
          className="hero_img"
          src="/imgs/Hero_Large_Screen.jpg"
          width={1280}
          height={616}
          effect="blur"
          alt="Hero image"
        />
        <div class="absolute lg:bottom-60 md:bottom-56 sm:bottom-6 lg:left-20 p-4 bg-opacity-50 text-white">
          <h2 className="lg:text-6xl md:text-4xl font-bold">
            Premium Tableware <br /> Artisan Crafted
          </h2>
        </div>
      </div>
    </div>
  );
}
