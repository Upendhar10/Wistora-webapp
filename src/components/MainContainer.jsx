import { Outlet } from "react-router-dom";
const MainContainer = () => {
  return (
    <div className="border-1 m-1 h-full w-full rounded-md border">
      <Outlet />
    </div>
  );
};

export default MainContainer;
