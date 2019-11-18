import React, {Component} from "react";

class Back extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    randomNum = () => {
        return Math.floor(Math.random() * 9)
    }

    render() { 
        return (
            <div key="back">
                {console.log("------------------", this.props)}
                <img className="cardPics" src={this.props.cardPic.cardPics[this.randomNum()]} alt="Bull"/>
                This is the back of the card.
                <button onClick={this.props.handleClick}>Click to flip</button>
            </div>
        );
    }
}
 
export default Back;