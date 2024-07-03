import recipeLogo from "../../assets/recipefinder-removebg-preview.png";
import wishlist from "../../assets/wishlist.png";
import Hero from "./Hero";

function Navbar() {
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
      <Hero />
    </div>
  );
}

export default Navbar;
