import React, { Component } from 'react'

export class employee extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    state = {
        employee: null
    }

    componentDidMount(){
        console.log("mount")
    }
    render() {
        return (
            <div className="wrapper">
                <div className="registration_form">
                    <div className="title">Who are you visiting:</div>
                <input type="text" placeholder="Enter Name Here: "></input>
                <br></br>
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

export default employee