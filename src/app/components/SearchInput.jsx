"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  async function searchProduct(e) {
    e.preventDefault(); // Prevents default form submission
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    if (name) {
      router.push(`/shop/${name}`);
      setSearchTerm(""); // Clear the input field after search
    }
  }

  return (
    <form className="relative w-[300px]" onSubmit={searchProduct}>
      <input
        className="appearance-none bg-gray-100 rounded-md w-full py-2 px-4 text-gray-800 leading-tight outline-none"
        id="username"
        type="text"
        placeholder="Search..."
        name="name"
        value={searchTerm} // Controlled input
        onChange={(e) => setSearchTerm(e.target.value)} // Update state on change
      />

      <div className="absolute right-2 inset-y-0 flex items-center cursor-pointer">
        <button aria-label="Search" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
