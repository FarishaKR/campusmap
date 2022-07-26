import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Psta from "./components/pages/Psta";
import Office1 from "./components/pages/Office1";
import Library from "./components/pages/Library";
import Board from "./components/pages/Board";
import Director from "./components/pages/Director";
import Vp from "./components/pages/Vp";
import Class from "./components/pages/Class";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/Products" component={Products} />
          <Route path="/Psta" component={Psta} />
          <Route path="/office1" component={Office1} />
          <Route path="/library" component={Library} />
          <Route path="/board" component={Board} />
          <Route path="/director" component={Director} />
          <Route path="/vp" component={Vp} />
          <Route path="/class" component={Class} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
