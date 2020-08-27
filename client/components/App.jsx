import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// Import Routes
import Home from './Home'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} /> 
    </Router>
  );
};

export default App;
