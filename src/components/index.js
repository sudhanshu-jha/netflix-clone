import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

import "./index.scss";
import { LandingPage, MoviePage, SearchPage, NotFoundPage } from "./allRoutes";

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/movie" element={<MoviePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  </BrowserRouter>
);
export default Routes;
