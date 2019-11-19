import React, { Component } from 'react';

class Score extends Component {
    constructor(props){
        super(props)
        this.state = { }
    }

    render() { 
        return ( 
            <div>
                <button onClick={this.props.addPoint(this.props.points)}>TEST</button>
                <h1>{this.props.points}</h1>
            </div>
        );
    }
}
 
export default Score;