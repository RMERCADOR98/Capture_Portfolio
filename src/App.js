import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyle";
import Nav from "./Components/Nav";
import { Route, Switch, useLocation } from "react-router-dom";
import ContactUs from "./pages/ConstactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail ";

//Animation Presence
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route exact path="/work/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
