import SideMenubar from "./SideMenubar";
import MainContainer from "./MainContainer";

import { useSelector } from "react-redux";

function Body() {
  const isOpen = useSelector((store) => store.sideMenu.isOpen);
  return (
    <div className="flex">
      {isOpen && <SideMenubar />}
      <MainContainer />
    </div>
  );
}

export default Body;
