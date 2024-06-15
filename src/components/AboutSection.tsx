import Image from "next/image";
type AboutSectionProps = {
  reverse?: boolean;
  image: string;
};

function AboutSection({ reverse = false, image }: AboutSectionProps) {
  return (
    <div className={`flex p-24 ${reverse ? "flex-row-reverse" : ""}`}>
      <div className="w-2/5 flex flex-col justify-center items-start text-wine px-10">
        <p className="text-5xl mb-5">
          {reverse ? "Посетете ја нашата винарија " : "За нас"}
        </p>
        <p className="text-xl mb-5">
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
          className={`border px-8 py-5 border-wine text-xl hover:bg-wine hover:text-white transition duration-300 ease-in-out`}
        >
          {reverse ? "Резервирај" : "Повеќе"}
        </a>
      </div>

      <div className="w-3/5 flex justify-center items-center p-10">
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
