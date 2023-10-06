import RestaurantHeader from "@/app/components/Restaurant/RestaurantHeader";
import RestaurantMakeReservation from "@/app/components/Restaurant/RestaurantMakeReservation";
import RestaurantNavbar from "@/app/components/Restaurant/RestaurantNavbar";
import RestaurantReviewCard from "@/app/components/Restaurant/RestaurantReviewCard";
import Star from "@/app/components/Star";
import { Location, PrismaClient, Review } from "@prisma/client";

import { Metadata } from "next";
import Link from "next/link";
const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  description: string;
  location: Location;
  images: string[];
  slug: true;
}

const calculateRating = (reviews: Review[]) => {
  let value = 0;
  reviews.forEach((review) => {
    value += review.rating;
  });
  const length = reviews.length;
  if (length > 0) {
    return value / length;
  } else {
    return 0;
  }
};

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      description: true,
      location: true,
      images: true,
      slug: true,
      review: true,
    },
  });

  return restaurant;
};

export default async function ResturantDetail({ params }: any) {
  const { slug } = params;
  const restaurant = await fetchRestaurantBySlug(slug);
  if (restaurant) {
    const rating = calculateRating(restaurant.review);
    return (
      <div>
        <div>
          <RestaurantHeader
            location={restaurant?.location}
            name={restaurant?.name}
          />
          <div className="flex m-auto w-2/3 justify-between items-start-0 -mt-11">
            <div className="bg-gray-100 w-[70%] rounded py-3 px-6 shadow">
              <RestaurantNavbar slug={restaurant.slug} />

              <div className="mt-4 border-b pb-6">
                <h1 className="font-bold text-6xl">{restaurant?.name}</h1>
              </div>
              {/* RATING */}
              <div className="flex items-end">
                <div className="ratings mt-2 flex items-center">
                  <div>
                    <Star value={rating} />
                  </div>
                  <p className="text-reg ml-3">{rating.toFixed(1)}</p>
                </div>
                <div>
                  <p className="text-reg ml-4">
                    {restaurant.review.length} reviews
                  </p>
                </div>
              </div>
              {/* RATING */}
              {/* DESCRIPTION */}
              <div className="mt-4">
                <p className="text-lg font-light">{restaurant?.description}</p>
              </div>
              {/* DESCRIPTION */}
              {/* IMAGES */}
              <div>
                {restaurant.images.length > 0 && (
                  <div>
                    <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                      {restaurant.images.length} photos
                    </h1>
                    <div className="flex flex-wrap">
                      {restaurant?.images.map((image) => (
                        <img
                          key={image}
                          className="w-56 h-44 mr-1 mb-1"
                          src={image}
                          alt={restaurant.name}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* IMAGES */}
              {/* REVIEWS */}
              <div>
                <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                  {restaurant.review.length} reviews
                </h1>

                {restaurant.review.map((r) => (
                  <div key={r.id}>
                    <RestaurantReviewCard
                      first_name={r.first_name}
                      last_name={r.last_name}
                      rating={r.rating}
                      text={r.text}
                    />
                  </div>
                ))}
              </div>
              {/* REVIEWS */}
            </div>
            <RestaurantMakeReservation />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" flex  flex-col justify-center items-center h-full w-full">
        <div className="text-center text-5xl font-extrabold ">
          {" "}
          Restaurant doesnt exist{" "}
        </div>
        <br />
        <div className="">
          {" "}
          <Link href={"/"} className=" bg-cyan-900 text-white py-2 px-3 my-4 ">
            {" "}
            Home
          </Link>
        </div>
      </div>
    );
  }
}

export const metadata: Metadata = {
  title: "Restaurant Detail - FoodPoint",
};
