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
          alt="Hero image"
        />
      </div>
    </div>
  );
}
