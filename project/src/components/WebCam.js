import React, { Component } from 'react'

export class WebCam extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <div className="wrapper">
                <div className="registration_form">

               <div className="camera"></div>
               
                <div className="btn">
                    <button className="snap" onclick="take_snapshot()">Take a Picture</button> 
                    <br/>
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

export default WebCam