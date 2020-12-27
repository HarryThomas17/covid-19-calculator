import React, { Component } from "react";

class Risk extends Component {
    render() {
        return (
            <p>Risk: {parseFloat(this.props.risk * 100).toFixed(2)}%</p> // TODO better display
        );
    }
}

export default Risk;
