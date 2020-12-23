import React, { Component } from 'react';
import { Link  } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
