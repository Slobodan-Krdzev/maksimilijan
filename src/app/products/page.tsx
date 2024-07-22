import Banner from "@/components/Banner";
import WinesListing from "@/components/WinesListing";
import { fetchData } from "@/fetchData";
import { WineProps } from "@/interface/type";

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { color } = query;

  let endpoint = "wines";
  const data: WineProps[] = await fetchData(endpoint);

  let filteredData = data;
  if (color) {
    filteredData = data.filter((wine) => wine.color === color);
  }

  return {
    props: {
      wines: filteredData,
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
