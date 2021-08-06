import Image from "next/image";
import {
  SearchIcon,
  UsersIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left section */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          src="/images/airbnb.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left
        "
        />
      </div>
      {/* middle section */}
      <div className="flex items-center  md:border-2 rounded-full py-2 px-2">
        <input
          type="text"
          placeholder="Start your search"
          className="border-0 outline-none flex-grow bg-transparent mx-2 text-sm text-gray-400 "
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full p-2 cursor-pointer text-white md:mx-2 " />
      </div>
      {/* right section */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 ">
        <p className="hidden md:inline-flex cursor-pointer ">Become a host</p>
        <GlobeAltIcon className="h-8" />
        <div className="flex items-center space-x-4 border-2 rounded-full p-2 cursor-pointer ">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
