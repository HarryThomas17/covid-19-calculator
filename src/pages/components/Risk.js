import React, { Component } from "react";

class Risk extends Component {
    render() {
        return (
            <p>Risk: {this.props.risk * 100}%</p> // TODO better display
        );
    }
}

export default Risk;
