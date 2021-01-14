import React, { Component } from 'react';

export class iAm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (

            <div className="wrapper">
                <div className="registration_form">
                    <div className="title">
                         How may I help you?
                    </div>
 
                   <h2>I am</h2>
                    <select id="kind" name="iAm">
                        <option value="visitor">a visitor</option>
                        <option value="contractor">a contractor</option>
                        <option value="delivery">making a delivery</option>
                        <option value="signout">Sign out </option>
                    </select>
                <br/>
                <div className="btn">
                    <button className="Next" onClick={this.continue}>
                        Next
                    </button>
                </div>
            </div>
            </div>
        )
    }
}

export default iAm