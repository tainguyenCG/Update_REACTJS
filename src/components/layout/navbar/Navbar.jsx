import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { Button, Modal } from "antd";

const Navbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    navigate("/login");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add("nav-dark");
        } else {
          navRef.current.classList.remove("nav-dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <ul className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "custom_link active" : "custom_link"
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? "custom_link active" : "custom_link"
              }
              onClick={closeMenu}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? "custom_link active" : "custom_link"
              }
              onClick={closeMenu}
            >
              Books
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <Button type="primary" onClick={showModal}>
          <FaSignOutAlt className="SignOut-icon" />
        </Button>

        <div className="hamburger-menu" onClick={handleMenuClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <Modal
          title=""
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Confirm logout?</p>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
