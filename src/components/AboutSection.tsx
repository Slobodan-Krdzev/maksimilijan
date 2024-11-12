"use client";
import { AboutSectionProps } from "@/interface/type";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function AboutSection({ reverse = false, image }: AboutSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);
  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row p-8 md:p-24 transition-all duration-700 ease-in-out ${
        reverse ? "md:flex-row-reverse" : ""
      } ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full md:w-2/5 flex flex-col justify-center items-start text-wine px-4 md:px-10 mb-8 md:mb-0 transition-transform duration-700 ease-in-out">
        <p className="text-3xl md:text-5xl mb-5">
          {reverse ? "Посетете ја нашата винарија " : "За нас"}
        </p>
        <p className="text-base md:text-xl mb-5">
          {reverse
            ? `Максимилијан е мала семејна винарија,официјално регистрирана во 2021 година и истата е сместена во село Пепeлиште на само 4 километри од Автoпатот Скопје -  Атина. Винаријата има сопствени лозови насади од од 1.5 хектари од кои се произведува    високо квалитетно вино на традициoнален начин, со вкупен капацитет од 5000 литри. Во склоп на самата винарија има соба за дегустација со капацитет за прием на 10 лица. И 3 Апартмани за преноќување со појадок за 9 лица. Винаријата  може да се пофали со долгогодишно производство на вино на традиционален домашен начин, со корени од прадедо, призводител на бочви за вино, и потомци, кои секогаш произведувале вино од локални сорти на грозје, до трансформација во семејна винарија со модерни методи и современа опрема за производство на вино.`
            : `Максимилијан е мала семејна винарија,официјално регистрирана во 2021 година и истата е сместена во село Пепeлиште на само 4 километри од Автoпатот Скопје -  Атина. Винаријата има сопствени лозови насади од од 1.5 хектари од кои се произведува    високо квалитетно вино на традициoнален начин, со вкупен капацитет од 5000 литри. Во склоп на самата винарија има соба за дегустација со капацитет за прием на 10 лица. И 3 Апартмани за преноќување со појадок за 9 лица. Винаријата  може да се пофали со долгогодишно производство на вино на традиционален домашен начин, со корени од прадедо, призводител на бочви за вино, и потомци, кои секогаш произведувале вино од локални сорти на грозје, до трансформација во семејна винарија со модерни методи и современа опрема за производство на вино.`}
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
