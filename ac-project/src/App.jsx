// import logo from "./logo.svg";

import { Route, Switch } from "react-router-dom";
import { links } from "./utils/consts";
import { Home } from "./Pages";
import NavBar from "./components/NavBar";
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
        
      </main>
    </>
  );
}

export default App;
