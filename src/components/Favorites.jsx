import { useContext } from "react";
import { FavouriteRecipe } from "../context/myContext";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import recipeLogo from "../assets/recipefinder-removebg-preview.png";
import wishlist from "../assets/wishlist.png";
import { ToastContainer, toast } from "react-toastify";

function Favorites() {
  const { favorites, removeFromFavorites } = useContext(FavouriteRecipe);
  const navigate = useNavigate();

  return (
    <div>
      <div className="border-y-2 shadow-lg flex justify-between">
        <img
          src={recipeLogo}
          alt=""
          className="w-[100px] ml-8 cursor-pointer"
        />
        <img src={wishlist} alt="" className="w-[100px] cursor-pointer" />
      </div>
      <div className="pt-14 flex flex-wrap gap-20 w-[90%] m-auto justify-center items-center">
        {favorites.length === 0 ? (
          <div>
            <p className="text-red-400 lg:text-3xl italic font-bold mt-20 sm:text-xl">
              No favorite recipe in the list
            </p>
          </div>
        ) : (
          favorites.map((item) => {
            return (
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
                        removeFromFavorites(item.idMeal);
                        toast.error("Recipe removed from the favorite list", {
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
            );
          })
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

export default Favorites;
