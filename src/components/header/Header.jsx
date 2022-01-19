import React from "react";
import "./Header.css";

import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <div className="header">
      <div className="header_container">
        <div className="header__left">Webastral</div>
        <div className="header__right">
          <nav className="navbar">
             <Link to="/" style={{ padding: 5,  textDecoration: 'none' }}>
                <label className="navBar__item">Home</label>
              </Link>
              <Link to="/contact" style={{ padding: 5, textDecoration: 'none'  }}>
                <label className="navBar__item">Contact</label>
              </Link>
          </nav>
        </div>
      </div>
    </div>
  )
};

export default Header;
