import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import NavBar from './pages/components/NavBar'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
            </Switch> 
        </BrowserRouter>
    );
  }
}

export default App;
