import React, { Component } from "react";

class PeopleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPeople: 6,
    };
  }

  handlePeopleChange = (event) => {
    this.setState({
      numberOfPeople: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div className="PeopleForm">
          <label>Number of People</label>
          <input
            type="number"
            value={this.state.numberOfPeople}
            onChange={this.handlePeopleChange}
          />
        </div>
      </form>
    );
  }
}

export default PeopleForm;
