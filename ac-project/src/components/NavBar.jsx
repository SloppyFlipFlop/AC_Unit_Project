import React, { useState, useEffect } from "react";

import { FaBars, FaSleigh } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links, socials } from "../utils/consts";

import logo from "../utils/images/logo.svg";

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  // const checkSize = () => {
  //   if (window.innerWidth > 768) {
  //     setShowNavBar(true);
  //   }
  //   if (window.innerWidth <= 768) {
  //     setShowNavBar(true);
  //   }
  // };
  // useEffect(() => {
  //   checkSize();
  //   window.addEventListener("resize", checkSize);
  //   return window.removeEventListener("resize", checkSize);
  // }, []);

  return (
    <nav className={`navbar ${showNavBar && "show"}`}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="links-container">
          <ul className="links">
            {links
              .filter((link) => link.text !== "Error" && link.text !== "Admin")
              .map((link) => {
                const { url, id, text } = link;
                return (
                  <li key={id}>
                    {/* <Link to={url}>{text}</Link> */}
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
          </ul>
        </div>
        <ul className="social-icons">
          {socials.map((social) => {
            const { url, id, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="nav-toggle" onClick={() => setShowNavBar(!showNavBar)}>
        <FaBars />
      </button>
    </nav>
  );
};

export default NavBar;
