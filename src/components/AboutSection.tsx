import Image from "next/image";

function AboutSection() {
  return (
    <div className="flex py-10 bg-cream background-image">
      {/* Прв дел */}
      <div className="w-1/2 flex flex-col justify-center items-center text-wine font-bold p-5">
        <p className="text-5xl">За нас</p>
        <p className="p-5 text-center text-xl bg-cream rounded">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
          iste? Dolorum inventore dicta nostrum libero doloribus assumenda,
          accusantium quis fugiat, cum voluptatibus temporibus esse odio ipsum
          ad facilis perferendis nobis voluptate quam quaerat officia laborum
          est. Aperiam ut, repudiandae neque deleniti recusandae dolores eius
          excepturi! Aliquid explicabo blanditiis distinctio facere rem
          accusantium maiores natus animi consequuntur! Repellendus architecto
          harum doloribus illum deserunt sed, facere aspernatur nesciunt commodi
          amet, reprehenderit eos incidunt praesentium!{" "}
        </p>
      </div>

      <div className="w-1/2 flex justify-center items-center p-10">
        <Image
          src="/outdoor.jpg"
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
