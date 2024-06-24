"use client";

import Banner from "@/components/Banner";
import { OrderForm } from "@/components/OrderForm";

export default function CheckoutPage() {
  return (
    <>
      <Banner imageSrc="/outdoor.jpg" text="Вашата Нарачка" />;
      <OrderForm />;
    </>
  );
}
