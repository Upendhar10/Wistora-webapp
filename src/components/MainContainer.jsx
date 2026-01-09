import { Outlet } from "react-router-dom";
import SearchFeature from "./SearchFeature.jsx";

const MainContainer = () => {
  return (
    <div className="m-1 w-full rounded-md h-full flex flex-col overflow-hidden">
      {/* Fixed Search */}
      <div className="mt-2 w-full rounded-md flex-shrink-0">
        <SearchFeature />
      </div>

      {/* Scrollable Area */}
      <div className="flex-1 overflow-y-auto hide-scrollbar [scrollbar-width:none]">
        <Outlet />
      </div>
    </div>
  );
};


export default MainContainer;





