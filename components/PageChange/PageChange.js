import React from "react";
import Image from "next/image";
import jampling from "../../public/img/brand/jampling.png";

// reactstrap components
// import { Spinner } from "reactstrap";

// core components

export default function PageChange(props) {
  return (
    <div>
      <div className="bg-white fixed z-40 w-full h-full top-0 left-0"></div>
      <div className="top-0 left-0 w-full h-full block z-50 absolute bg-white "></div>
      <div className="my-32 mx-auto max-w-sm text-center relative z-50 top-0">
        <div className="block mb-4">
          <i className="fas fa-circle-notch animate-spin text-gray-500 mx-auto text-6xl"></i>
        </div>
        <h4 className="text-xl font-medium text-white">
          {" "}
          <Image src={jampling} width={642} height={205} />
        </h4>
      </div>
    </div>
  );
}
