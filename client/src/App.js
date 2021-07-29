import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      
      
      <Footer/>
    </div>
  );
}

export default App;
