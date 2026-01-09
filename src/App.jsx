import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { RouterProvider } from "react-router-dom";
import MainContainerRouter from "./pages/routes";

const App = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 overflow-hidden">
        <RouterProvider router={MainContainerRouter} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
