import React from "react";
import logo from "./logo.png"
import "./Header.css";


const Header = () => {
    return(
      <header>
        <nav className="navbar navbar-light bg-light navbar-expand-lg secondary-color lighten-1">
          <a className="navbar-brand" href="/">
            <img src={logo} className="logo" alt="Logo" height="52" />
          </a>
          <h2>Memory Game</h2>
          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item avatar dropdown">
              <h2>Score</h2>
            </li>
          </ul>
        </nav>
      </header>          
    );
};


export default Header;