// src/components/layout/Layout.jsx
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen px-4">
        <Outlet /> {/* Nơi sẽ render các route con */}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
