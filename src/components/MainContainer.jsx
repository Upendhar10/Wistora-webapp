import { Outlet } from "react-router-dom";
import SearchFeature from "./SearchFeature.jsx";

const MainContainer = () => {
  return (
    <div className="m-1 w-full rounded-md min-h-full">
      <div className="mt-2 w-full rounded-md">
        <SearchFeature />
      </div>
      <Outlet />
    </div>
  );
};

export default MainContainer;
