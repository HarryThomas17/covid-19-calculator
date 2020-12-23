import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './pages/components/NavBar'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch> 
        </BrowserRouter>
    );
  }
}

export default App;
