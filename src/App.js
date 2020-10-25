import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Rubies from "./components/pages/Rubies";
import Sapphires from "./components/pages/Sapphires";
import ProductScreen from "./components/pages/ProductScreen";
import Emeralds from "./components/pages/Emeralds";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Switch>
        <Route path="/rubies" component={Rubies} />
      </Switch>
      <Switch>
        <Route path="/sapphires" component={Sapphires} />
      </Switch>
      <Switch>
        <Route path="/emeralds" component={Emeralds} />
      </Switch>
      <Switch>
        <Route path="/product:id" component={ProductScreen} />
      </Switch>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
      <Switch>
        <Route path="/signup" component={SignUp} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
