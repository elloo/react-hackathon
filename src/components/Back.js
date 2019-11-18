import React, {Component} from "react";

class Back extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    randomNum = () => {
        return Math.floor(Math.random() * 2)
    }

    render() { 
        return (
            <div key="back">
                <img src={this.props.cardPic} alt="Bull"/>
                This is the back of the card.
                <button onClick={this.props.handleClick}>Click to flip</button>
            </div>
        );
    }
}
 
export default Back;