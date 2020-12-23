import React from 'react';

class Risk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            risk: null
        };
    }

    render() {
        return (
            <p>{this.props.noPeople}</p>
        );
    }
}

export default Risk;
