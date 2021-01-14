import React, { Component } from 'react'
import Iam from './Iam';
import PersonalInfo from './PersonalInfo';
import Employee from './Employee';
import AllInfo from './AllInfo';
import HomePage from './HomePage';
import WebCam from './WebCam';
import Success from './Success';
import firebase from './firebase'


export class main extends Component {

   


    state = {
        step: 1,   
        //step 2
        iAm:'',

        //step 3
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        phoneNum: '',
        

        //step 4
        employee: '',

        
    }


        //next page
    nextStep = () => {
        const {step} = this.state;

        this.setState({
            step: step + 1
        });
    }

        //go back
    prevStep = () => {
        const {step} = this.state;

        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

   showStep = () => {
            const {step, firstName, lastName,email, occupation, phoneNum} = this.state;
            
            if(step === 1)
                return (
                <HomePage 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                />);

            if(step === 2)
                return (
                <Iam 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                />);

            if(step === 3)
                return (
                <PersonalInfo 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    firstName ={firstName}
                    lastName = {lastName}
                    email = {email}
                    occupation = {occupation}
                    phoneNum = {phoneNum}                   
            />);

            
            if(step === 4)
                return (
                <Employee 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
            />);

            if(step === 5)
                return (
                <WebCam 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
            />);

            if(step === 6)
                return (
                <AllInfo 
                firstName ={firstName}
                lastName = {lastName}
                email = {email}
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
            />);


            if(step === 7)
                return (
                <Success 
                    
            />);  

    

    }
    render() {
        const {step} = this.state;
        return (
            <div>
                
                {this.showStep()}
            </div>
        );
    }
}

export default main