import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/HomePage/Navbar.jsx";
import Recipe from "./components/Recipe.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";
import FavouriteContext from "./context/myContext.jsx";
import Favorites from "./components/Favorites.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/recipe",
    element: <Recipe />,
  },
  {
    path: "/recipe-details/:id",
    element: <RecipeDetails />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavouriteContext>
    <RouterProvider router={router} />
  </FavouriteContext>
);
