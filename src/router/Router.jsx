import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import { allRoutes } from "./allRoutes";
import PrivateWrapper from "./privateRoutes/PrivateWrapper";

const RouteWrapper = ({ route, children }) => {
  const AppLayoutwrapper = route.hasLayout ? BaseLayout : Fragment;
  const PrivateRouteWrapper = route.isPrivate ? PrivateWrapper : Fragment;

  return (
    <PrivateRouteWrapper>
      <AppLayoutwrapper>{children}</AppLayoutwrapper>;
    </PrivateRouteWrapper>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <RouteWrapper route={route}>
                  <route.element />
                </RouteWrapper>
              }
            />
          );
        })}

        {/* <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="product/:productId" element={<Product />} />

          <Route path="/not-need" element={<div>not needed</div>} />
          <Route path="*" element={<div>Not found</div>} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
