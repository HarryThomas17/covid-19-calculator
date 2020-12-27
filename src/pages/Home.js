import React, { Component } from "react";
import Form from './components/Form';
import Risk from './components/Risk';

const apiEndpoint = 'https://api.coronavirus.data.gov.uk//v1/data?filters=areaType=overview&structure={"date":"date","areaName":"areaName","newCasesByPublishDate":"newCasesByPublishDate"}';


class Home extends Component {
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
          <h1>COVID-19 Risk Calculator</h1>
          <Form updateRisk={this.updateRisk}/>
          <Risk risk={this.state.risk}/>
        </React.Fragment>
      );
    }

    updateRisk(noPeople) {
        fetch(apiEndpoint)
        .then(res => res.json())
        .then(data => {
            let tenDayCaseCount = 0;
            for (let i = 0; i < 10; i++) {
                tenDayCaseCount += data.data[i].newCasesByPublishDate;
            }
            let prob = tenDayCaseCount / 68058472; // Population of the UK
            let risk = 1.0 - Math.pow(1.0 - prob, noPeople);
            this.setState({risk: risk});
        })
        .catch(console.log);
    }
}

export default Home;
