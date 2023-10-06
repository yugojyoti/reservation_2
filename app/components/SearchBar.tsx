"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const SearchBar = () => {
  const [searchKey, setSearchKey] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    const keySearch = searchKey.toLowerCase();
    router.push(`/search?search=${keySearch}`);
  };
  return (
    <div className="text-left lext-lg py-3 m-auto flex justify-center">
      <input
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
        className="rounded mr3 p-2 w-[450px] "
        type="text"
        value={searchKey}
        placeholder="State, city or town"
      />
      <button
        onClick={handleSearch}
        className="text-white  bg-red-600 px-9 py-2 mx-1 rounded"
      >
        Let's go
      </button>
    </div>
  );
};

export default SearchBar;
