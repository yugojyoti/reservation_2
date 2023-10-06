import Link from "next/link";
import React from "react";
import { PrismaClient, Cuisine, Location, PRICE, Review } from "@prisma/client";
import Star from "./Star";

const prisma = new PrismaClient();

interface CardProps {
  name: string;
  main_image: string;
  price: PRICE;
  location: Location;
  cuisine: Cuisine;
  slug: string;
  review: Review[];
}
export const calculateRating = (reviews: Review[]) => {
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

const Card: React.FC<CardProps> = ({
  review,
  name,
  location,
  main_image,
  slug,
  price,
  cuisine,
}) => {
  const rating = calculateRating(review);
  return (
    <Link href={`/restaurant/${slug}`}>
      <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer  p-2 shadow-lg border-gray-200 hover:bg-gray-100">
        <img src={main_image} alt={name} className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{name}</h3>
          <div className="flex items-start">
            <div className="flex mb-2">
              <Star value={rating} />
            </div>
            <p className="ml-2">{review.length} reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{location.name}</p>
            <p className="mr-3">{price}</p>
            <p>{cuisine.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
