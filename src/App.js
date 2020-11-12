import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Plan from './components/pages/Plan';
import Destinations from './components/pages/Destinations';
import BlogList from './components/pages/BlogList';
import About from './components/pages/About';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/plan" component={Plan} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/blog" component={BlogList} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
    </>
  )
}

export default App;