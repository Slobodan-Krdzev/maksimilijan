import Banner from "@/components/Banner";
import RoomsDetails from "@/components/RoomsDetails";

const RoomDetails = async ({
  params,
}: {
  params: { id: string; name: string };
}) => {
  try {
    const response = await fetch(
      `https://maksimilijan-wine--room.glitch.me/smestuvanje/${params.id}`,
      { next: { revalidate: 5000 } }
    );
    const roomData = await response.json();

    return (
      <>
        <Banner imageSrc={roomData.mainImage} text={""} />
        {roomData && (
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
        )}
      </>
    );
  } catch (error) {
    console.error("Error fetching room data:", error);
    return null;
  }
};

export default RoomDetails;
