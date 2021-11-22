import React, { useState } from 'react';
import { BrowserRouter as Router,Switch, Route, } from "react-router-dom";
import Footer from "./components/Footer";
import Pizza from './pages/pizza';
import { GlobalStyle } from "./globalStyles";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  const [isOpen, setIsOpen]=useState(false)
  const toggle=()=>{
      setIsOpen(!isOpen)
  }
  return (
    <Router>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/pizzas'>
          <Pizza />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
