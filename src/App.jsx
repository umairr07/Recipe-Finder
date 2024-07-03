import Navbar from "./components/HomePage/Navbar";
import Recipe from "./components/Recipe";
import RecipeDetails from "./components/RecipeDetails";
import FavouriteContext from "./context/myContext";

function App() {
  return (
    <div>
      <Navbar />
      <Recipe />
      <RecipeDetails />
      {/* <Hero /> */}
    </div>
  );
}

export default App;
