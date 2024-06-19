import Banner from "@/components/Banner";
import RoomsDetails from "@/components/RoomsDetails";

const RoomDetails = async ({
  params,
}: {
  params: { id: string; name: string };
}) => {
  try {
    const response = await fetch(
      `http://localhost:8000/smestuvanje/${params.id}`
    );
    const roomData = await response.json();

    return (
      <>
        <Banner imageSrc={roomData.mainImage} text={roomData.name} />
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
