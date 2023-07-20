import React from "react";
import "./NavBar.scss";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav className="mobile-bottom-nav">
      <div
        className={
          location.pathname === "/"
            ? "mobile-bottom-nav__item mobile-bottom-nav__item--active"
            : "mobile-bottom-nav__item"
        }
      >
        <div className="mobile-bottom-nav__item-content">
          <i className="material-icons">
            <HomeIcon />
          </i>
          Home
        </div>
      </div>

      <div
        className={
          location.pathname === "/search"
            ? "mobile-bottom-nav__item mobile-bottom-nav__item--active"
            : "mobile-bottom-nav__item"
        }
      >
        <div className="mobile-bottom-nav__item-content">
          <i className="material-icons">
            <SearchIcon />
          </i>
          Search
        </div>
      </div>
      <div className="mobile-bottom-nav__item">
        <div
          className={
            location.pathname === "/orders"
              ? "mobile-bottom-nav__item mobile-bottom-nav__item--active"
              : "mobile-bottom-nav__item"
          }
        >
          <i className="material-icons">
            <ReceiptIcon />
          </i>
          orders
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
