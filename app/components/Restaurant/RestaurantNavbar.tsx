import Link from "next/link";
import React from "react";

interface RestaurantNavbarProps {
  slug: string;
}
const RestaurantNavbar: React.FC<RestaurantNavbarProps> = ({ slug }) => {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href={`/restaurant/${slug}`} className="mr-7">
        {" "}
        Overview{" "}
      </Link>
      <Link href={`/restaurant/${slug}/menu`} className="mr-7">
        {" "}
        Menu{" "}
      </Link>
    </nav>
  );
};

export default RestaurantNavbar;
