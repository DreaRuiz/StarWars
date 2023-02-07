import React from "react";
import logo from "../assets/logo.png";
import "../index.css";
import { Link } from "react-router-dom";
import { HeaderStyle } from "../styles/Styled";

export const Header = () => {
  return (
    <HeaderStyle>
      <img className="logo" src={logo} alt="logo de star wars" />
      <Link to="/Login" className="login" >LOG IN </Link>
      <Link to="/Register" className="login" >REGISTER </Link>
      <div>
        <Link to="/" className="nav">
          {" "}
          HOME{" "}
        </Link>
        <Link to="/List" className="nav">
          STARSHIPS{" "}
        </Link>
      </div>
      <div className="line"></div>
    </HeaderStyle>
  );
};

<Link to="/starships" className="header-link">
  Starships
</Link>;
