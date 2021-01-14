import React, { Component } from 'react'

export class AllInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {

        const { firstName,lastName,email} = this.props;


        return (

            <div className="wrapper">
                <div className="registration_form">
                    <div className="title">Who are you visiting:</div>
                
                Full Name: <b>{firstName} {lastName}</b><br/>
                Email: <b>{email}</b><br></br>

                <h5 className="note">*Please check if information is correct</h5>

                <div className="btn">
                    <button className="Back" onClick={this.back}>
                        Back
                    </button>
                    <button className="Next" onClick={this.continue}>
                        Next
                    </button>
                </div>
                </div>
            </div>
        )
    }
}

export default AllInfo