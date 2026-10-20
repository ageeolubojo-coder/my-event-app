
import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <footer>
        &copy; {new Date().getFullYear()} EventApp. All rights reserved.
      </footer>
    </div>
  );
};

export default RootLayout;

