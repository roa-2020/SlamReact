import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

// Import Routes
import Home from './Home'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      theme: 'light',
      icon: 'fas fa-adjust',
    }
  }
  render(){
    return (
      <Router>
        <div id="body" className={this.state.theme}>
          <nav>
            <Link className="active" to="/">Home</Link>
            <Link to="/">Scroller</Link>
            <Link to="/">Banner</Link>
            <Link to="/"><i className={this.state.icon}></i></Link>
          </nav>
          <header>
            <img src="/images/logo.png" />
          </header>
          <div className="container">
            <Route exact path="/" component={Home} /> 
          </div>
        </div>
      </Router>
    );
  }
};

export default App;
