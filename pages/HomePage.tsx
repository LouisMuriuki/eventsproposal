"use client";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("id");

  switch (search) {
    case "001":
      toast.success("This link is from BeachBoy one");

      break;
    case "002":
      toast.success("This link is from BeachBoy two");

      break;
    case "003":
      toast.success("This link is from BeachBoy three");

      break;

    default:
     toast.success("This link is from an unknown BeachBoy");
      break;
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 />
      <ToastContainer />
    </div>
  );
};

export default HomePage;
