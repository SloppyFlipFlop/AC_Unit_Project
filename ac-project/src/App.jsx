// import logo from "./logo.svg";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { links } from "./utils/consts";
import { Home, AboutUs, Contact } from "./Pages";
import NavBar from "./components/NavBar";
// import rvimg from "./utils/images/rv-picture.jpg";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
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
      
      <Home />
      <AboutUs />
      <Contact/>
    </>
  );
}

export default App;
