"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const Selector = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex justify-center m-5">
      <div className="flex bg-gray-300 rounded-full transition-all duration-1000">
        <div
          onClick={() => router.push("/UsersPage")}
          className={`p-2 rounded-full cursor-pointer transition-all duration-1000 ${
            pathname === "/UsersPage" ? "bg-gray-600" : "hover:bg-gray-300"
          }`}
        >
          <img
            src="https://res.cloudinary.com/duwddcqzi/image/upload/v1750354658/reshot-icon-user-list-NB87S9PMAR_w9ku7h.svg"
            alt="Users"
            title="All Users"
            className="h-8 mx-2"
          />
        </div>
        <div
          onClick={() => router.push("/FilterPage")}
          className={`p-2 rounded-full cursor-pointer transition-all duration-1000 ${
            pathname === "/FilterPage" ? "bg-gray-600" : "hover:bg-gray-300"
          }`}
        >
          <img
            src="https://res.cloudinary.com/duwddcqzi/image/upload/v1750354660/reshot-icon-user-check-MAH9J4YFKZ_b5l6cw.svg"
            alt="Filtered Users"
            title="Filter Users"
            className="h-8 mx-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Selector;
