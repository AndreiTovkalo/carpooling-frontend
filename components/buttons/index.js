import React from "react";
import MuiButton from "@mui/joy/Button";

const Button = (props) => {
  return (
    <MuiButton
      {...props}
      // className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
      type="button"
    >
      Connect
    </MuiButton>
  );
};

export default Button;
