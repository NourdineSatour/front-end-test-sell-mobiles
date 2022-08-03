import React from "react";
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <Link className="header__title__link" to="/">
          Zara Mobile
        </Link>
          
          <div className="header__title__breadcrumbs">breadcrumbs</div>
      </div>
      <div className="header__cart">0</div>
    </div>
  );
}

export default Header;
