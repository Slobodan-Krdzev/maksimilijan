import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import Map from "@/components/Map";
import FooterInfo from "@/components/FooterInfo";

export default function Home() {
  return (
    <>
      {/* <Carusel /> */}
      <Banner imageSrc="/winery.jpg" text="Maksimilijan Family Winery!" />

      <AboutSection />
      <Map />
    </>
  );
}
