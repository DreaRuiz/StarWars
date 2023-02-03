import React from "react";
import logo from "../assets/logo.png";
import "../index.css";

export const Header = () => {
  return (
    <>
      <img className="logo" src={logo} alt="logo de star wars" />
      <p className="login">LOG IN / SIGN UP</p>
      <div className="line">
        <p className="nav">HOME </p>
        <p className="nav">STARSHIP</p>
      </div>
    </>
  );
};
