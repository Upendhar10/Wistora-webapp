import { Outlet } from "react-router-dom";

import SearchFeature from "./SearchFeature.jsx";
const MainContainer = () => {
  return (
    <div className="border-1 m-1 h-full min-h-screen w-full rounded-md border">
      <div className="m-1 w-full rounded-md border-b-2">
        <SearchFeature />
      </div>
      <Outlet />
    </div>
  );
};

export default MainContainer;
