import { HiMenuAlt3 } from "react-icons/hi";
// import { MdSunny } from "react-icons/md";
import { PiMoonStarsFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleSideMenu } from "../reduxStore/SideMenuSlice";

const Logo = () => {
  return (
    <div>
      <a href="/">
        <h1 className="text-3xl font-bold italic text-purple-500">Wistora.</h1>
      </a>
    </div>
  );
};

const Header = () => {
  const dispatch = useDispatch();

  const HandleSideMenu = () => {
    dispatch(toggleSideMenu());
  };
  return (
    <div className="mb-2 flex items-center justify-between border-b p-2 px-5 md:mb-0">
      <HiMenuAlt3
        className="cursor-pointer text-3xl"
        onClick={() => HandleSideMenu()}
      />
      <Logo />
      <div className="flex items-center gap-5">
        <PiMoonStarsFill className="cursor-pointer text-2xl" />
        <FaUserCircle className="cursor-pointer text-2xl" />
      </div>
    </div>
  );
};

export default Header;
