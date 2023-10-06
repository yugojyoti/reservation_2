import Link from "next/link";

import Header from "./components/Header";
import Card from "./components/Card";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurant = async () => {
  const restaurant = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cusine: true,
      location: true,
      price: true,
      slug: true,
      review: true,
    },
  });
  return restaurant;
};

export default async function Home() {
  const restaurants = await fetchRestaurant();

  return (
    <main>
      <Header />
      {/* Cards */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center ">
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            name={restaurant.name}
            location={restaurant.location}
            main_image={restaurant.main_image}
            cuisine={restaurant.cusine}
            price={restaurant.price}
            slug={restaurant.slug}
            review={restaurant.review}
          />
        ))}
      </div>
    </main>
  );
}
