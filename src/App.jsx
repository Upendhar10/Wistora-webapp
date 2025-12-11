import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { RouterProvider } from "react-router-dom";
import MainContainerRouter from "./pages/routes";

const App = () => {
  return (
    <div className="max-h-screen h-full">
      <Header />
      <RouterProvider router={MainContainerRouter} />
      <Footer />
    </div>
  );
};

export default App;
