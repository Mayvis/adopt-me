import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  const themeHook = useState("peru");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Navbar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
