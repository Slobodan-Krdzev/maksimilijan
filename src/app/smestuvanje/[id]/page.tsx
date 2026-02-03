import Banner from "@/components/Banner";
import RoomsDetails from "@/components/RoomsDetails";

const RoomDetails = async ({
  params,
}: {
  params: { id: string; name: string };
}) => {
  try {
    // Вчитување од локален db.json (во public/)
    const response = await fetch("http://localhost:3000/db.json", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch db.json");
    }

    const db = await response.json();

    // Најди соба по ID
    const roomData = db.smestuvanje?.find((room: any) => room.id === params.id);

    if (!roomData) {
      console.error("Room not found for id:", params.id);
      return null;
    }

    return (
      <>
        <Banner imageSrc={roomData.mainImage} text={""} />
        <div>
          <RoomsDetails
            name={roomData.name}
            price={roomData.price}
            description={roomData.description}
            id={roomData.id}
            location={roomData.location}
            mainImage={roomData.mainImage}
            images={roomData.images}
          />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching room data:", error);
    return null;
  }
};

export default RoomDetails;
