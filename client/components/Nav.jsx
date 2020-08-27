import React from "react";
import { Link, useLocation } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: location.pathname,
      icon: this.props.icon,
      toggle: this.props.toggle,
    };
  }
  render() {
    return (
      <nav>
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/Scroller">Scroller</Link>
        <Link to="/Banner">Banner</Link>
        <Link to="/" onClick={this.state.toggle}>
          <i className={this.state.icon}></i>
        </Link>
      </nav>
    );
  }
}

export default Nav;
