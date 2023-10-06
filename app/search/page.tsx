import { Metadata } from "next";
import Header from "../components/Header";

import RestaurantCard from "../components/search/RestaurantCard";
import SearchSidebar from "../components/search/SearchSidebar";
import { PrismaClient, PRICE } from "@prisma/client";
import Link from "next/link";

interface ParamProps {
  params: {};

  searchParams: {
    search?: string;
    cuisine?: string;
    price?: PRICE;
  };
}
const prisma = new PrismaClient();

export async function fetchSearch(search = "", cuisine = "", price: any) {
  console.log(search, cuisine, price);
  if (search) {
    const restaurants = await prisma.restaurant.findMany({
      where: {
        location: {
          name: search,
        },
      },
      select: {
        id: true,
        name: true,
        main_image: true,
        location: true,
        cusine: true,
        price: true,
        slug: true,
        review: true,
      },
    });

    return restaurants;
  } else if (cuisine) {
    const restaurants = await prisma.restaurant.findMany({
      where: {
        cusine: {
          name: cuisine,
        },
      },
      select: {
        id: true,
        name: true,
        main_image: true,
        location: true,
        cusine: true,
        price: true,
        slug: true,
        review: true,
      },
    });

    return restaurants;
  } else {
    const restaurants = await prisma.restaurant.findMany({
      where: {
        price: price,
      },
      select: {
        id: true,
        name: true,
        main_image: true,
        location: true,
        cusine: true,
        price: true,
        slug: true,
        review: true,
      },
    });

    return restaurants;
  }
}

export default async function Search(props: ParamProps) {
  const { search, cuisine, price } = props.searchParams;

  const restaurants = await fetchSearch(search, cuisine, price);

  return (
    <>
      {restaurants ? (
        <div>
          {" "}
          <Header />
          <div className="flex py-4 m-auto w-2/3 justify-around items-start">
            <SearchSidebar />
            <div>
              {" "}
              {restaurants.map((restaurant) => (
                <div key={restaurant.id}>
                  <RestaurantCard
                    name={restaurant.name}
                    location={restaurant.location}
                    cuisine={restaurant.cusine}
                    price={restaurant.price}
                    slug={restaurant.slug}
                    image={restaurant.main_image}
                    reviews={restaurant.review}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col">
            <h1> Search result dont exist</h1>
            <div>
              <Link href={"/"} className="bg-cyan-900 text-white px-4 py-2">
                Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const metadata: Metadata = {
  title: "Search - FoodPoint",
  description: "Restaurant Search Page",
};
