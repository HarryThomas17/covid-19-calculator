import React from 'react';

class Risk extends React.Component {
    render() {
        return (
            <p>{this.props.risk * 100}%</p> // TODO better display
        );
    }
}

export default Risk;
