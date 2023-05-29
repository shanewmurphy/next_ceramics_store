import Image from "next/image";
import Link from "next/link";

const Blog_Data = [
  {
    id: "01",
    Title: "Clay and Creativity",
    Image: "/imgs/Blog_imgs/Blog_01-min.jpg",
    alt: "Blog Clay and Creativity",
    Date: "23 Feb, 2023",
    URL: "",
  },
  {
    id: "02",
    Title: "Ceramic Techniques Uncovered",
    Image: "/imgs/Blog_imgs/Blog_02-min.jpg",
    alt: "Ceramic Techniques Uncovered",
    Date: "12 Mar, 2023",
    URL: "",
  },
  {
    id: "03",
    Title: "Designing with Clay",
    Image: "/imgs/Blog_imgs/Blog_03-min.jpg",
    alt: "Designing with Clay",
    Date: "12 May, 2023",
    URL: "",
  },
];

export default function Blog() {
  return (
    <div className="lg:block md:block sm:hidden">
      <div className="w-11/12 mx-auto">
        <h3 className="text-text font-bold lg:text-3xl md:text-3xl">
          Latest New
        </h3>
      </div>
      <div className="w-11/12 mx-auto mt-4 mb-40">
        <div className="flex flex-row gap-6">
          {Blog_Data.map((Blogs) => {
            return (
              <div className="basis-4/12" key={Blogs.id}>
                <div>
                  <Image
                    className="w-screen object-fill"
                    src={Blogs.Image}
                    width={367}
                    height={427}
                    alt={Blogs.alt}
                  />
                </div>
                <div>
                  <h2 className="mt-2 font-bold text-text lg:text-xl md:text-sm antialiased">
                    {Blogs.Title}
                  </h2>
                  <h6 className="font-medium text-sm text-text mt-1 antialiased">
                    {Blogs.Date}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
