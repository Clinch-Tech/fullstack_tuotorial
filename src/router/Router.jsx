import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="product/:productId" element={<Product />} />

          <Route path="/not-need" element={<div>not needed</div>} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
