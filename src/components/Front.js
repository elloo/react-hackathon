import React, {Component} from "react";
import "./../App.css";

class Front extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div key="front">
                <img className="cardPics" src="../images/flag.png" alt="Bull"/>
                This is the front of the card.
                <button onClick={this.props.handleClick}>Click to flip</button>
            </div>
        );
    }
}
 
export default Front;