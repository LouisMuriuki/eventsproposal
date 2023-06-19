"use client";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import React from "react";

const HomePage = () => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("id");
  console.log(search);

  switch (search) {
    case "001":
      alert("This link is from BeachBoy one");

      break;
    case "002":
      alert("This link is from BeachBoy two");

      break;
    case "003":
      alert("This link is from BeachBoy three");

      break;

    default:
      alert("This link is from an unknown BeachBoy");
      break;
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 />
    </div>
  );
};

export default HomePage;
