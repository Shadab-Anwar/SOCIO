"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Selector from "../Components/Selector";
import Card from "../Components/Card";
import Fallback from "../Components/Fallback";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    url: string;
    website: string;
    phone: string;
  };

const Page = () => {
  const [data, setdata] = useState<User[]>([]);
  const [data1, setdata1] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [SearchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetching_user = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data);
        const response1 = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data1 = await response1.json();
        console.log(data1);
        setdata1(data1);
        setTimeout(() => {
          setdata(data);
          setdata1(data1);
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch the data");
      }
    };
    fetching_user();
  }, []);

  return (
    <div className=" bg-gray-100">
      <Navbar />
      <Selector />

      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="input input-bordered w-full max-w-md p-5"
          value={SearchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {isLoading ? (
        <>
          <Fallback />
          <Fallback />
        </>
      ) : (
        data.length > 0 &&
        data1.length > 0 &&
        data
          .filter((user) =>
            user.name.toLowerCase().includes(SearchTerm.toLowerCase())
          )
          .map((Element, Index) => {
            const photo = data1[Index];
            return (
                <Card
                key={Index}
                name={Element.name}
                username={Element.username}
                email={Element.email}
                photo={photo.url}
                website={Element.website}
                num={Element.phone}
              />
            );
          })
      )}
      <Footer />
    </div>
  );
};

export default Page;
