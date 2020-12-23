import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noPeople: null
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <label>
                    No. of People: 
                    <input type="number" onChange={this.changeHandler}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }

    changeHandler(event) {
        this.setState({noPeople: event.target.value})
    }

    submitHandler(event) {
        this.props.updatePeople(this.state.noPeople);
        event.preventDefault(); // Prevent default form submit behaviour
    }
}

export default Form;
