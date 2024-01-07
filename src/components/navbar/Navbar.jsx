import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-[#EEEFF0] md:pt-10 pt-4">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <div>
          <h1 className="text-4xl font-bold">pti.</h1>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="relative">
            <input
              placeholder="Search Audiobook"
              className="rounded-lg bg-[#FEFEFE] px-4 py-3 pl-11 focus:outline-none md:w-[400px] lg:w-[500px]"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 fill-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </div>
          <div className="relative">
            <button
              onClick={() => setOpen((pre) => !pre)}
              className="flex w-28 items-center justify-between rounded-lg bg-[#FEFEFE] px-4 py-3 font-medium md:w-36 lg:w-48"
            >
              <span>MENU</span>
              <svg
                className={`fill-orange-500 transition-all ${
                  isOpen && "rotate-180"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </button>
            <div
              className={`absolute z-10 w-48 shadow-md transition-all duration-300 right-0 ${
                isOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <ul className="mt-3 rounded-lg bg-[#FEFEFE] py-3">
                <li className="cursor-pointer px-4 py-2 font-medium text-[#3D4E60] transition-all hover:bg-[#E7E9EC] hover:text-[#FB6215]">
                  Home
                </li>
                <li className="cursor-pointer px-4 py-2 font-medium text-[#3D4E60] transition-all hover:bg-[#E7E9EC] hover:text-[#FB6215]">
                  Details
                </li>
                <li className="cursor-pointer px-4 py-2 font-medium text-[#3D4E60] transition-all hover:bg-[#E7E9EC] hover:text-[#FB6215]">
                  Category
                </li>
                <li className="cursor-pointer px-4 py-2 font-medium text-[#3D4E60] transition-all hover:bg-[#E7E9EC] hover:text-[#FB6215]">
                  My Favourites
                </li>
                <li className="cursor-pointer px-4 py-2 font-medium text-[#3D4E60] transition-all hover:bg-[#E7E9EC] hover:text-[#FB6215]">
                  Profile
                </li>
                <li className="cursor-pointer px-4 py-2 font-medium text-[#3D4E60] transition-all hover:bg-[#E7E9EC] hover:text-[#FB6215]">
                  Login/Signup
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden items-center md:flex">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FD6011]">
            <svg
              className="w-5 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
