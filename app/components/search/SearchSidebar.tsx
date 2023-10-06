"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PRICE } from "@prisma/client";

const SearchSidebar = () => {
  const router = useRouter();

  const handleSearch = (value: string) => {
    router.push(`/search?search=${value}`);
  };

  const handleCuisine = (value: string) => {
    router.push(`/search?cuisine=${value}`);
  };
  const handlePrice = (value: PRICE) => {
    router.push(`/search?price=${value}`);
  };

  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2 cursor-pointer font-bold">Region</h1>

        <p
          className="font-light text-reg"
          onClick={() => {
            handleSearch("delhi");
          }}
        >
          <button className="hover:text-cyan-600"> Delhi</button>
        </p>

        <p
          className="font-light text-reg"
          onClick={() => handleSearch("mumbai")}
        >
          <button className="hover:text-cyan-600"> Mumbai</button>
        </p>

        <p
          className="font-light text-reg"
          onClick={() => handleSearch("kolkata")}
        >
          <button className="hover:text-cyan-600"> Kolkata</button>
        </p>
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2 font-bold">Cuisine</h1>
        <p
          className="font-light text-reg"
          onClick={() => {
            handleCuisine("indian");
          }}
        >
          <button className="hover:text-cyan-600"> Indian</button>
        </p>
        <p
          className="font-light text-reg"
          onClick={() => {
            handleCuisine("chinese");
          }}
        >
          <button className="hover:text-cyan-600"> Chinese</button>
        </p>
        <p
          className="font-light text-reg"
          onClick={() => {
            handleCuisine("italian");
          }}
        >
          <button className="hover:text-cyan-600"> Italian </button>
        </p>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2 font-bold">Price</h1>
        <div className="flex">
          <button
            className="border w-full text-reg font-light rounded-l p-2 hover:text-cyan-600 "
            onClick={() => {
              handlePrice("CHEAP");
            }}
          >
            CHEAP
          </button>
          <button
            className="border-r border-t border-b w-full text-reg font-light p-2 hover:text-cyan-600"
            onClick={() => {
              handlePrice("REGULAR");
            }}
          >
            REGULAR
          </button>
          <button
            className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r hover:text-cyan-600"
            onClick={() => {
              handlePrice("EXPENSIVE");
            }}
          >
            EXPENSIVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSidebar;
