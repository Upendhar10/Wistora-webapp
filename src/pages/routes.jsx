import { createBrowserRouter } from "react-router-dom";

import Body from "../components/Body";
import Home from "../pages/Home";

const MainContainerRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />, // Body layout (Sidebar + MainContainer)
    children: [
      { index: true, element: <Home /> },
      { path: "trending", element: <h1>Trending</h1> },
      { path: "about", element: <h1>About</h1> },
      { path: "live", element: <h1>live</h1> },
      { path: "watch", element: <h1>watch</h1> },
    ],
  },
]);

export default MainContainerRouter;
