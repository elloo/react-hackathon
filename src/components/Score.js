import React, { Component } from 'react';

class Score extends Component {
    constructor(props){
        super(props)
        this.state = { 
            // turnsTaken: 0
        }
    }

    render() { 
        return ( 
            <div className="Score">
                <h2>Turns: {this.props.turnsTaken}</h2>
            </div>
        );
    }
}
 
export default Score;