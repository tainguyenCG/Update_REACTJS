

import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};


export default App;
