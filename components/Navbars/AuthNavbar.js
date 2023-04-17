import React from "react";
import Link from "next/link";
// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between py-3 mt-12 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-start">

        </div>
      </nav>
    </>
  );
}
