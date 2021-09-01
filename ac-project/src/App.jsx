// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { links } from "./utils/consts";
import { Home, Error } from "./Pages";
import NavBar from "./components/NavBar";
// import rvimg from "./utils/images/rv-picture.jpg";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path exact="/#home">
          <Home />
        </Route>
        <Route path="*">
          <Error />
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
    </>
  );
}

export default App;
