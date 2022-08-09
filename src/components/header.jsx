import React from "react";
import { Link } from 'react-router-dom';
import './header.scss';

const Header = (props) => {
  const {totalProducts, breadcrumbs} = props
  return (
    <div className="header">
      <div className="header__title">
        <Link className="header__title__link" to="/">
          Zara Mobile
        </Link>
        <Link className="header__title__link" to="/">
          <div className="header__title__breadcrumbs">{breadcrumbs}</div>
        </Link>
      </div>
      <div className="header__cart">{totalProducts}</div>
    </div>
  );
}

export default Header;
