import { FiAlignJustify } from "react-icons/fi";
import myImg from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <nav className=" container mx-auto  border-b sticky top-0  z-50 border-gray-100">
      <div className="flex justify-between items-center   py-5 bg-white ">
        <span className="block md:hidden text-3xl px-5"><FiAlignJustify /></span>
        <img src={myImg} alt="" />
        <ul className=" hidden md:flex  gap-5 items-center">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Technologies</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="items-center">
          <button>Sing In</button>
          <button className="btn ml-5 rounded-full bg-[#D91B7E] text-white">
            Sing Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
