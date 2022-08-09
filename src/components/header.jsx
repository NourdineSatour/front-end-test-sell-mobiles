import React from "react";
import { Link } from 'react-router-dom';
import './header.scss';

const Header = (props) => {
  const {totalProducts, breadcrumbs} = props
  return (
    <div className="header">
      <div className="header__title">
        <div>
          <Link className="header__title__link" to="/">
            Zara Mobile
          </Link>
        </div>
        <div>
          <Link className="header__title__breadcrumbs" to="/">
            {breadcrumbs}
          </Link>
        </div>
      </div>
      <div className="header__cart">{totalProducts}</div>
    </div>
  );
}

export default Header;
