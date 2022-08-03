import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/home";
import About from "../screens/about";
import Error from "../screens/error";
import NavbarComponent from "../components/Navbar/Navbar";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NavbarComponent />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
};

export default AppRoutes;
