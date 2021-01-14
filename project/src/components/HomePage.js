import React, { Component } from 'react';




export class HomePage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        return (
            <div className="homepage">
                
                <body >
                    <h1>Welcome To The</h1>
                    <h1 className="ama">AMALIT<i id="icon" class="fas fa-bars"></i>CH VISITOR'S MANAGENEMT SYSTEM</h1>
                        
                    <a id="first"  onClick={this.continue}><i class="fas fa-mouse-pointer"> CLICK HERE TO START</i> 
                    </a>
                
                </body>
            </div>       
        )
    }
}

export default HomePage