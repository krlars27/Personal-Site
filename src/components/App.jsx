import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Navbar, About, Portfolio, Home } from "./";

const App = () => {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="Home" element={<Home />} />
    </Route>
  )
);

  return (
    <div id="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
