import React, { Component } from 'react';

class Score extends Component {
    constructor(props){
        super(props)
        this.state = { }
    }

    render() { 
        return ( 
            <div>
                <button onClick={this.props.addTurn(this.props.turnsTaken)}>TEST</button>
                <h1>{this.props.turnsTaken}</h1>
            </div>
        );
    }
}
 
export default Score;