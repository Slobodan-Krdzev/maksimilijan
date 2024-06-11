import { WineProps } from "@/components/Card";
import router from "next/dist/client/router";

const addToCart = (wine: WineProps) => {
  const cartItem = wine;
  const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = [...existingCart, cartItem];
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  // Префрлете корисникот на страницата за кошничката
  router.push("/addtocart");
};
export default addToCart;
