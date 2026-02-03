import Banner from "@/components/Banner";
import WineDetail from "@/components/WineDetail";

const WineDetails = async ({
  params,
}: {
  params: { id: string; name: string };
}) => {
  try {
    const res = await fetch("http://localhost:3000/db.json", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch db.json");

    const db = await res.json();
    const wineData = db.wines.find((w: any) => w.id === params.id);

    return (
      <>
        <Banner imageSrc="/gallery8.webp" text="Нашите вина" />
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
