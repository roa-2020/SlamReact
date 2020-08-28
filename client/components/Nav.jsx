import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  const current = useLocation().pathname;
  return (
    <nav>
      <Link className={current === "/" ? "active" : ""} to="/">
        Home
      </Link>
      <Link className={current === "/Scroller" ? "active" : ""} to="/Scroller">
        WonderBoy
      </Link>
      <Link className={current === "/Banner" ? "active" : ""} to="/Banner">
        {props.theme === 'light' ? 'Bruce' : 'Hulk'}
      </Link>
      <Link to={current} hash="/#" onClick={props.toggle}>
        <i className={props.icon}></i>
      </Link>
    </nav>
  );
};

export default Nav;
