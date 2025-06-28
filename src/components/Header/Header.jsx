import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import headerImg from "../../assets/moviescope.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerLeft">
          <Link to="/">
            <img
              className="header__icon"
              src={headerImg}
              style={{
                transform: "scale(1.7)",
                maxWidth: "100%",
                height: "auto"
              }}
            />
          </Link>
          <div className="navLinks">
            <Link to="/movies/popular" style={{ textDecoration: "none" }}>
              <span>Popular</span>
            </Link>
            <Link to="/movies/top-rated" style={{ textDecoration: "none" }}>
              <span>Top Rated</span>
            </Link>
            <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
              <span>Upcoming</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
