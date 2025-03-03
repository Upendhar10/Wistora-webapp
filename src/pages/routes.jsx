import { createBrowserRouter } from "react-router-dom";

import Body from "../components/Body";
import Home from "../pages/Home";
import VideosList from "../components/VideosList";

const MainContainerRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />, // Body layout (Sidebar + MainContainer)
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <h1>About</h1> },
      { path: "trending", element: <VideosList category={"trending"} /> },
      { path: "live", element: <VideosList category={"live"} /> },
      { path: "music", element: <VideosList category={"music"} /> },
      { path: "gaming", element: <VideosList category={"gaming"} /> },
      { path: "sports", element: <VideosList category={"sports"} /> },
    ],
  },
]);

export default MainContainerRouter;
