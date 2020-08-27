import React from "react";
import { HashRouter as Router, Route, Link, useLocation } from "react-router-dom";

// Import Routes
import Home from './Home'
import Scroller from './Scroller'
import Banner from './Banner'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      theme: 'dark',
      icon: 'fas fa-adjust',
    }
  }
  render(){
    return (      
      <Router>
        {console.log(location)}
        <div id="body" className={this.state.theme}>
          <nav>
            <Link className="active" to="/">Home</Link>
            <Link to="/Scroller">Scroller</Link>
            <Link to="/Banner">Banner</Link>
            <Link to="/"><i className={this.state.icon}></i></Link>
          </nav>
          <header>
            <h1>SlamReact</h1>
          </header>
          <div className="container">
            <Route exact path="/" component={Home} /> 
            <Route path="/Scroller" component={Scroller} /> 
            <Route path="/Banner" component={Banner} /> 
          </div>
        </div>
      </Router>
    );
  }
};

export default App;
