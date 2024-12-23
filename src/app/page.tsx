import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import FooterInfo from "@/components/FooterInfo";
import { Citat } from "@/components/Citat";

export default function Home() {
  return (
    <>
      <Banner
        imageSrc="/accomodation.webp"
        text="Maksimilijan Family Winery!"
      />
      <AboutSection image="/gallery2.webp" />
      <Citat />
      <AboutSection reverse={true} image="/gallery14.webp" />
      <FooterInfo />
    </>
  );
}
