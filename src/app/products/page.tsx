import Banner from "@/components/Banner";
import WinesListing from "@/components/WinesListing";
import { fetchData } from "@/fetchData";
import { WineProps } from "@/interface/type";

export async function renderWines(context: any) {
  const { query } = context;
  const { type } = query;

  const endpoint = type
    ? `https://maksimilijan-wine--room.glitch.me/wines?type=${encodeURIComponent(
        type
      )}`
    : "https://maksimilijan-wine--room.glitch.me/wines";

  const data: WineProps[] = await fetchData(endpoint);

  return {
    props: {
      wines: data,
    },
  };
}

export default function Products({ wines }: { wines: WineProps[] }) {
  return (
    <>
      <Banner imageSrc="/vineyard-hills.jpg" text="Нашите вина" />
      <WinesListing wines={wines} />
    </>
  );
}
