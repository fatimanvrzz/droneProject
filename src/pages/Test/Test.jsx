import React from "react";
import { PiArrowBendUpRightDuotone } from "react-icons/pi";

function HomeTest() {
  return (
    <>
      <div className="flex flex-col gap-4 m-20">
        <BruhStuff />
        <BruhStuff />
        <BruhStuff />
        <BruhStuff />
      </div>
    </>
  );
}

function BruhStuff() {
  return (
    <p className="text-3xl text-red-600 font-poppins text-center border-2 border-red-600 w-20">
      BRUH
    </p>
  );
}

export default HomeTest;
