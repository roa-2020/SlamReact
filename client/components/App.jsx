import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// Import Routes
import Header from "./Header";
import Home from "./Home";
import Scroller from "./Scroller";
import Banner from "./Banner";
import Nav from "./Nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      icon: "fas fa-sun",
    };
  }

  toggleTheme = (theme) => {
    if (theme === "dark") {
      this.setState({
        theme: "dark",
        icon: "fas fa-moon",
      });
    } else {
      this.setState({
        theme: "light",
        icon: "fas fa-sun",
      });
    }
  };

  render() {
    return (
      <Router>
        <div id="body" className={this.state.theme}>
          <Header />
          <Nav
            icon={this.state.icon}
            toggle={() => {
              this.toggleTheme(this.state.theme === "light" ? "dark" : "light");
            }}
          />

          <div className="container">
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} toggle={this.toggleTheme} />}
            />
            <Route path="/Scroller" component={Scroller} />
            <Route path="/Banner" component={Banner} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
