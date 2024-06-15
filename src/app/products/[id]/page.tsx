import Banner from "@/components/Banner";
import { WineDetailProps } from "@/components/WineDetail";
import WineDetail from "@/components/WineDetail";

const WineDetails = async ({
  params,
}: {
  params: { id: string; name: string };
}) => {
  try {
    const response = await fetch(`http://localhost:8000/wines/${params.id}`);
    const wineData = await response.json();

    const addToCart = (wine: WineDetailProps) => {
      const existingItems = JSON.parse(
        localStorage.getItem("cartItems") ?? "[]"
      );

      const updatedItems = [...existingItems, wine];

      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    };

    return (
      <>
        <Banner imageSrc="/vineyard-hills.jpg" text="Нашите вина" />

        {wineData && (
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
        )}
      </>
    );
  } catch (error) {
    console.error("Error fetching wine data:", error);
  }
};

export default WineDetails;
