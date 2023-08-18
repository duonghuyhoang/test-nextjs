import React from "react";
import AutocompleteAddress from "./AutocompleteAddress";
import Cars from "./Cars";
import Cards from "./Cards";
import DistanceTime from "./DistanceTime";

function Booking() {
  return (
    <div className='p-5 '>
      <h2 className='text-[20px] font-semibold'>Booking</h2>
      <div
        className='border-[1px] p-5 
        rounded-md'
        style={{ height: "70vh" }}
      >
        <AutocompleteAddress />

        <Cars />
        <Cards />
        <button
          className='w-full
         bg-yellow-400
        p-1 rounded-md
        mt-4'
        >
          Book
        </button>
      </div>
    </div>
  );
}

export default Booking;
