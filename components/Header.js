import React, { useState } from "react";

import Image from "next/image";
import {
  SearchIcon,
  UsersIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = (e) => {
    setSearchInput("");
  };
  const search = () => {
    router.push({
      pathname: "/Search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest,
      },
    });
    setSearchInput("");
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-2 px-2 md:px-10">
      {/* left section */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto "
      >
        <Image
          src="/images/airbnb.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left
        "
        />
      </div>
      {/* middle section */}
      <div className="flex items-center  md:border-2 rounded-full py-2 px-2 sm:mr-4">
        <input
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
          type="text"
          placeholder={placeholder || "Start your search"}
          className="border-0 outline-none flex-grow bg-transparent mx-2 text-sm text-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full p-2 cursor-pointer text-white md:mx-2 " />
      </div>
      {/* right section */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 ">
        <p className="hidden md:inline-flex cursor-pointer ">Become a host</p>
        <GlobeAltIcon className="h-8" />
        <div className="flex items-center space-x-4 border-2 rounded-full p-1 cursor-pointer ">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col mx-auto mt-5  col-span-3 ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl font-semibold spl-2 flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="h-5 mr-2" />
            <input
              className="w-12 text-red-400 text-lg outline-none"
              onChange={(e) => {
                setNoOfGuest(e.target.value);
              }}
              type="number"
              name=""
              id=""
              value={noOfGuest}
              min="1"
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
