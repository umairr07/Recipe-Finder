import { createContext, useState } from "react";

export const FavouriteRecipe = createContext();

const FavouriteContext = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  console.log(favorites);
  const addToFavorites = (recipe) => {
    const alreadyFavorite = favorites.some(
      (fav) => fav.idMeal === recipe.idMeal
    );
    if (!alreadyFavorite) {
      setFavorites([...favorites, recipe]);
    }
  };

  // Function to remove a recipe from favorites
  const removeFromFavorites = (recipeId) => {
    setFavorites(favorites.filter((recipe) => recipe.idMeal !== recipeId));
  };

  return (
    <FavouriteRecipe.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavouriteRecipe.Provider>
  );
};

export default FavouriteContext;
