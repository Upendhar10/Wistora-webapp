import { HiMenuAlt3 } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleSideMenu } from "../redux/slices/SideMenuSlice.js";

const Logo = () => {
  return (
    <div>
      <a href="/">
        <h1 className="text-3xl font-bold italic text-purple-500 text-center">Wistora.</h1>
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
    <div className="mb-2 flex items-center justify-between p-2 px-5 md:mb-0">
      <HiMenuAlt3
        className="cursor-pointer text-3xl"
        onClick={() => HandleSideMenu()}
      />
      <Logo />
      <div className="flex items-center gap-5">
        <FaUserCircle className="cursor-pointer text-2xl" />
      </div>
    </div>
  );
};

export default Header;



