import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";

// layout for page
import User from "../layouts/User";

export default function EditProfile() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full  px-4 mt-16">
        <CardSettings />
      </div>
      {/* <div className="w-full lg:w-4/12 px-4"> */}
      {/*  <CardProfile /> */}
      {/* </div> */}
    </div>
  );
}

EditProfile.layout = User;
