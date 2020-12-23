import React, { Component } from "react";
import NavBar from './components/NavBar.js'
import Form from './components/Form.js';
import Risk from './components/Risk.js';

const endpoint = (
'https://api.coronavirus.data.gov.uk/v1/data?' +
'filters=areaType=nation;areaName=england&' +
'structure={"date":"date","newCases":"newCasesByPublishDate"}'
);


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            risk: 0.0
        };

        this.updateRisk = this.updateRisk.bind(this);
    }

    render() {
      return (
        <React.Fragment>
          <NavBar />
          <h1>COVID-19 Risk Calculator</h1>
          <Form updateRisk={this.updateRisk}/>
          <Risk risk={this.state.risk}/>
        </React.Fragment>
      );
    }

    updateRisk(noPeople) {
        fetch(endpoint) // TODO calculate this properly
        .then(res => res.json())
        .then(data => {
            let yesterdayCases = data.data[0].newCases;
            let population = 68058472;
            let prob = yesterdayCases / population;
            let risk = 1.0 - Math.pow(1.0 - prob, noPeople);
            this.setState({risk: risk});
        })
        .catch(console.log);
    }
}

export default App;
