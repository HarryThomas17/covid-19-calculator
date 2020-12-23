import React from 'react';
import './App.css';
import NavBar from './components/navbar.jsx'
import Form from './Form.js';
import Risk from './Risk.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noPeople: null,
        };

        this.updatePeople = this.updatePeople.bind(this);
    }

    render() {
      return (
        <div className="App"> // <React.Fragment> ???
          <Navbar />
          <h1>COVID-19 Risk Calculator</h1>
          <Form updatePeople={this.updatePeople}/>
          <Risk noPeople={this.state.noPeople}/>
        </div>
      );
    }

    updatePeople(noPeople) {
        this.setState({noPeople: noPeople});
    }
}

export default App;
