import React, { useContext, useEffect, useState } from "react";
import recipeLogo from "../assets/recipefinder-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import { FavouriteRecipe } from "../context/myContext";
import { FaHeart } from "react-icons/fa";
import Loader from "../Loader/Loader";
import wishlist from "../assets/wishlist.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import the toastify CSS

function Recipe() {
  const [recipeData, setRecipeData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const { addToFavorites } = useContext(FavouriteRecipe);
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const data = await response.json();
    setRecipeData(data.meals);
    setFilteredData(data.meals); // Set filtered data initially
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchYourRecipe = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const searchFilter = recipeData.filter((rec) => {
      return rec.strMeal.toLowerCase().includes(value);
    });
    setFilteredData(searchFilter);
  };

  return (
    <div>
      <div className="border-y-2 shadow-lg flex justify-between">
        <img src={recipeLogo} alt="" className="w-[100px] ml-8" />
        <Link to={"/favorites"}>
          <img src={wishlist} alt="" className="w-[100px] cursor-pointer" />
        </Link>
      </div>

      <div className="lg:flex lg:flex-row gap-5 justify-center mt-20 items-center sm:flex sm:flex-col">
        <p className="text-xl italic font-medium">
          Search for your favorite recipe...
        </p>
        <input
          type="text"
          className="border-2 outline-none p-2 w-[300px] rounded-lg"
          placeholder="Search..."
          value={search}
          onChange={searchYourRecipe}
        />
      </div>

      <div className="pt-14 flex flex-wrap gap-20 w-[90%] m-auto justify-center items-center">
        {filteredData.length === 0 ? (
          <div className="mt-32">
            <Loader />
          </div>
        ) : (
          filteredData.map((item) => (
            <div
              key={item.idMeal}
              className="flex flex-col p-2 gap-5 rounded-lg shadow-xl cursor-pointer"
            >
              <img
                src={item.strMealThumb}
                alt=""
                className="w-[300px] h-[200px]"
                onClick={() => {
                  console.log(item.idMeal);
                  navigate(`/recipe-details/${item.idMeal}`);
                }}
              />
              <div className="p-2">
                <div className="flex justify-between">
                  <p className="text-xl font-semibold">{item.strMeal}</p>
                  <button
                    onClick={() => {
                      addToFavorites(item);
                      toast.success("Recipe added to Favorite List", {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    }}
                  >
                    <FaHeart className="text-red-500" />
                  </button>
                </div>
                <p className="text-[#9A9A9A]">{item.strArea} foods</p>
                <p className="">#{item.strCategory}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Recipe;
