import Navbar from "@/app/components/Navbar";
import ReserveForm from "@/app/components/ResturantReserve/ReserveForm";
import ReserveHeader from "@/app/components/ResturantReserve/ReserveHeader";
import { Metadata } from "next";

export default function ResturantReserve() {
  return (
    <>
      <Navbar />
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <ReserveHeader />
          <ReserveForm />
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: " Reservation -FoodPoint",
};
