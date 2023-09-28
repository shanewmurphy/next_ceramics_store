import Image from "next/image";
export default function Hero() {
  return (
    <div className="relative">
      <div className="relative">
        <Image
          className="hero_img"
          src="/imgs/Hero_Large_Screen.jpg"
          width={1280}
          height={616}
          effect="blur"
          alt="Hero image"
        />
        <div className="absolute">JJJ</div>
      </div>
    </div>
  );
}
