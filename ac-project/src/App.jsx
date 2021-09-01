// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";
import { links } from "./utils/consts";
import { Home } from "./Pages";
import NavBar from "./components/NavBar";
import rvimg from "./utils/images/rv-picture.jpg";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path exact="/">
          <Home />
        </Route>

        {/* So we are going to filter out the links that don't equal "Home" and map those links */}
        {links
          .filter((link) => link.text !== "Home")
          .map((link) => {
            const { id, url, page } = link;
            return (
              <Route key={id} path={url}>
                {page}
              </Route>
            );
          })}
      </Switch>

      <main className="container">
        <div className="landingPicture" id="#home">
          <img src={rvimg} alt="rv image" />
          <div className="landingInfo">
            <h3>Name of Company</h3>
            <p className="name">name</p>
            <p className="address">address</p>
            <p className="number">number</p>
            <button className="btn">Contact Us</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
