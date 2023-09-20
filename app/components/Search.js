"use client";
import React, { useState } from "react";

export default function Search({ searchText }) {
  const [search, setSearch] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(search);
  };
  return (
    <form
      className="flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        // value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search image..."
        className="bg-white p-2 w-[260px] sm:w-80 text-xl rounded-xl text-black outline-none placeholdertext-black placeholder:text-lg"
      />
    </form>
  );
}
