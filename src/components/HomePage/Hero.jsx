import "./Hero.css";
import recImage from "../../assets/bgforrecipe.jpg";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div>
      <div
        id="bg-image"
        className="relative  overflow-x-hidden overflow-y-hidden"
      >
        <img
          src={recImage}
          alt=""
          className="h-[86vh] lg:w-full sm:w-[500px] sm:object-cover sm:mr-20"
        />
        <div className="absolute lg:top-40 lg:left-40 w-full h-full flex flex-col gap-20 sm:top-10 sm:left-10">
          <div>
            <h1 className="text-[#31980f] lg:text-6xl font-bold sm:text-3xl">
              Food Recipes
            </h1>
            <h1 className="text-[#31980f] lg:text-xl font-medium sm:text-2xl">
              Easy Recipes for Beginners
            </h1>
          </div>

          <Link to={"/recipe"}>
            <button className="bg-[#31980f] text-white p-2 rounded-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
