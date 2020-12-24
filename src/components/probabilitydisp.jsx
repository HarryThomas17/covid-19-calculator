import React, { Component } from "react";

class ProbabilityDisplay extends Component {
  state = {
    loading: true,
    cases: null,
  };
  async componentDidMount() {
    const apiURL =
      'https://api.coronavirus.data.gov.uk//v1/data?filters=areaType=overview&structure={"date":"date","areaName":"areaName","newCasesByPublishDate":"newCasesByPublishDate"}';
    const response = await fetch(apiURL);
    const data = await response.json();
    var casesTenDay = 0;
    for (var idx = 0; idx < 10; idx++) {
      casesTenDay += data.data[idx].newCasesByPublishDate;
    }
    this.setState({
      cases: casesTenDay,
      loading: false,
    });
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>loading....</div>
        ) : (
          <div>
            <div>{this.state.cases}</div>
          </div>
        )}
      </div>
    );
  }
}

export default ProbabilityDisplay;
