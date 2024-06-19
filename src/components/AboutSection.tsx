import { AboutSectionProps } from "@/interface/type";
import Image from "next/image";

function AboutSection({ reverse = false, image }: AboutSectionProps) {
  return (
    <div
      className={`flex flex-col md:flex-row p-8 md:p-24 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-2/5 flex flex-col justify-center items-start text-wine px-4 md:px-10 mb-8 md:mb-0">
        <p className="text-3xl md:text-5xl mb-5">
          {reverse ? "Посетете ја нашата винарија " : "За нас"}
        </p>
        <p className="text-base md:text-xl mb-5">
          {reverse
            ? `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
          iste? Dolorum inventore dicta nostrum libero doloribus assumenda,
          accusantium quis fugiat, cum voluptatibus temporibus esse odio ipsum
          ad facilis perferendis nobis voluptate quam quaerat officia laborum
          est. Aperiam ut.`
            : `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
          iste? Dolorum inventore dicta nostrum libero doloribus assumenda,
          accusantium quis fugiat, cum voluptatibus temporibus esse odio ipsum
          ad facilis perferendis nobis voluptate quam quaerat officia laborum
          est. Aperiam ut.`}
        </p>
        <a
          href={reverse ? "/contact" : "aboutus"}
          className="border px-6 py-3 md:px-8 md:py-5 border-wine text-lg md:text-xl hover:bg-wine hover:text-white transition duration-300 ease-in-out"
        >
          {reverse ? "Резервирај" : "Повеќе"}
        </a>
      </div>

      <div className="w-full md:w-3/5 flex justify-center items-center p-4 md:p-10">
        <Image
          src={image}
          width={1000}
          height={1000}
          alt="logo"
          className="rounded"
        />
      </div>
    </div>
  );
}

export default AboutSection;
