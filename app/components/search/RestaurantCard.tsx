import Link from "next/link";
import React from "react";
import { Location, Cuisine, Review } from "@prisma/client";
import { calculateRating } from "../Card";
import Star from "../Star";
interface RestaurantCardProps {
  name: string;
  location: Location;
  cuisine: Cuisine;
  price: string;
  slug: string;
  image: string;
  reviews: Review[];
}

const ratingType = (rating: number) => {
  if (rating >= 4) {
    return "Awesome";
  } else if (rating >= 3) {
    return "Good";
  } else if (rating > 0) {
    return "Average";
  } else {
    return "Unrated";
  }
};
const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  location,
  cuisine,
  price,
  slug,
  image,
  reviews,
}) => {
  const rating = calculateRating(reviews);

  return (
    <div className="border-b flex pb-5">
      <img src={image} alt="" className="w-44 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">
            <Star value={rating} />
          </div>
          <p className="ml-2 text-sm">{ratingType(rating)}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">{price}</p>
            <p className="mr-4 capitalize">{cuisine.name}</p>
            <p className="mr-4 capitalize">{location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
