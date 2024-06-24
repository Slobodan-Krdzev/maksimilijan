import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import FooterInfo from "@/components/FooterInfo";
import { Citat } from "@/components/Citat";

export default function Home() {
  return (
    <>
      <Banner imageSrc="/winery.jpg" text="Maksimilijan Family Winery!" />
      <AboutSection image="/outdoor.jpg" />
      <Citat />
      <AboutSection reverse={true} image="/bottles.jpg" />
      <FooterInfo />
    </>
  );
}
