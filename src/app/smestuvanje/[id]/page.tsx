import Banner from "@/components/Banner";
import RoomsDetails from "@/components/RoomsDetails";
import { fetchData } from "@/fetchData";

const RoomDetails = async ({
  params,
}: {
  params: { id: string; name: string };
}) => {
  try {
    // земи ги сите сместувања од db.json
    const rooms = await fetchData("smestuvanje");

    // најди по id
    const roomData = rooms?.find((room: any) => room.id === params.id);

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
