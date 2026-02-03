import Banner from "@/components/Banner";
import WineDetail from "@/components/WineDetail";
import { fetchData } from "@/fetchData";

const WineDetails = async ({
  params,
}: {
  params: { id: string; name: string };
}) => {
  try {
    const wines = await fetchData("wines");
    const wineData = wines?.find((w: any) => w.id === params.id);

    if (!wineData) return null;

    return (
      <>
        <Banner imageSrc="/gallery8.webp" text="Нашите вина" />
        <div>
          <WineDetail
            image={wineData.image}
            name={wineData.name}
            color={wineData.color}
            alchocol={wineData.alchocol}
            vintage={wineData.vintage}
            price={wineData.price}
            description={wineData.description}
          />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching wine data:", error);
    return null;
  }
};

export default WineDetails;
