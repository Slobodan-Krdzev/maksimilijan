import { WineProps } from "@/interface/type";
import Card from "@/components/Card";

interface WinesListingProps {
  wines: WineProps[];
}

export default function WinesListing({ wines }: WinesListingProps) {
  const addToCart = (wine: WineProps) => {
    const existingItems = JSON.parse(localStorage.getItem("cartItems") ?? "[]");

    const updatedItems = [...existingItems, wine];

    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center justify-around text-center">
        {wines.map((wine: WineProps) => (
          <Card
            key={wine.id}
            image={wine.image}
            name={wine.name}
            id={wine.id}
            color={wine.color}
            addCardToShop={() => addToCart(wine)}
          />
        ))}
      </div>
    </div>
  );
}
