import React, { Component, useState,useEffect,Fragment,useC } from 'react'


export class PersonalInfo extends Component {
    
    


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {handleChange} = this.props;
        return (
            <Fragment>
            <div className="wrapper">
                <div className="registration_form">
                <div className="title">
                     Visitor's Details
                </div>
                <br/>First Name<br/>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        onChange={handleChange('firstName')}
                    />
                
                <br/>Last name<br/>
                    <input
                        type="text"
                        name="lasttname"
                        placeholder="Last Name"
                        onChange={handleChange('lastName')}
                    />
                
                <br/>Email<br/>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange('email')}
                    />
                
                <br/>Occupation<br/>
                    <input
                        type="text"
                        name="occupation"
                        placeholder="Occupation"
                        onChange={handleChange('occupation')}
                    />
                
                <br/>Phone Number<br/>
                    <input
                        type="text"
                        name="phoneNum"
                        placeholder="Phone Number"
                        onChange={handleChange('phoneNum')}
                    />
                
                <br/>
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
        </Fragment>
        )
    }
}

export default PersonalInfo