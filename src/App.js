import React from 'react';
import About from './about';
import Portfolio from './portfolio';
import Home from './home';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;