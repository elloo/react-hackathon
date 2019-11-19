import React, { Component } from 'react';

class Score extends Component {
    constructor(props){
        super(props)
        this.state = { 
        }
    }

    render() { 
        let turns = Math.floor(this.props.turnsTaken / 2)
        return ( 
            <div className="Score">
                <h2>Turns: {turns}</h2>
            </div>
        );
    }
}
 
export default Score;