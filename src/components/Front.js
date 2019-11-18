import React, {Component} from "react";
import "./../App.css";

class Front extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            // <h1>Front</h1>
            <div key="front">
                This is the front of the card.
                <button onClick={this.props.handleClick}>Click to flip</button>
            </div>
        );
    }
}
 
export default Front;