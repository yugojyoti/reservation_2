import Navbar from "@/app/components/Navbar";
import RestaurantHeader from "@/app/components/Restaurant/RestaurantHeader";
import RestaurantNavbar from "@/app/components/Restaurant/RestaurantNavbar";
import { PrismaClient } from "@prisma/client";
import { Metadata } from "next";
import Link from "next/link";
const prisma = new PrismaClient();

const fetchItems = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      items: true,
      slug: true,
      name: true,
      location: true,
    },
  });
  return restaurant;
};

export default async function RestaurantMenu({ params }: any) {
  const restaurant = await fetchItems(params.slug);

  return (
    <>
      {restaurant && (
        <div>
          <RestaurantHeader
            location={restaurant.location}
            name={restaurant.name}
          />
          <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
            <div className=" w-[100%] rounded py-3 px-6 shadow bg-gray-100">
              <RestaurantNavbar slug={restaurant.slug} />
              {/* DESCRIPTION PORTION */}
              {/* RESAURANT NAVBAR */} {/* MENU */}
              <main className="bg-gray-100 mt-5">
                <div>
                  <div className="mt-4 pb-1 mb-1">
                    <h1 className="font-bold text-4xl ">Menu</h1>
                  </div>
                  {restaurant.items.length > 0 ? (
                    <div className="flex flex-wrap justify-between">
                      {/* MENU CARD */}

                      {restaurant.items.map((item) => (
                        <div
                          className=" border rounded p-3 w-[49%] mb-3 shadow-lg border-white hover:bg-white"
                          key={item.id}
                        >
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <p className="font-light mt-1 text-sm">
                            {item.description}
                          </p>
                          <p className="mt-7">{item.price}</p>
                        </div>
                      ))}

                      {/* MENU CARD */}
                    </div>
                  ) : (
                    <>
                      <div className=" flex flex-col justify-center gap-5">
                        <h1 className="text-3xl font-bold ">
                          {" "}
                          Sorry ... No items Available now
                        </h1>
                        <p> Try another Restaurant</p>
                        <div className=" flex justify-center ">
                          <Link
                            href={"/"}
                            className=" bg-cyan-900 text-white px-4 py-2"
                          >
                            Home
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </main>
              {/* DESCRIPTION PORTION */}
            </div>{" "}
          </div>
        </div>
      )}
    </>
  );
}

export const metadata: Metadata = {
  title: "Menu - FoodPoint",
};
