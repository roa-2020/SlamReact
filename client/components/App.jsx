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
      theme: 'light',
      icon: 'fas fa-adjust',
    }
  }

  toggleTheme = (theme) => {
    this.setState({
      theme: theme,
      icon: (theme === 'light' ? 'fas fa-sun' : 'fas fa-moon')
    })
  }

  render(){
    return (      
      <Router>
        {console.log(location)}
        <div id="body" className={this.state.theme}>
          {/* <Nav icon={this.state.icon} toggle={this.toggleTheme} /> */}
          <header>
            <img src="/images/logo.png" />
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
