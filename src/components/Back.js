import React, {Component} from "react";

class Back extends Component {
    constructor(props) {
        super(props);
        this.state = {
         }
    }

    render() { 
        return (
            <div key="back">
                <button onClick={this.props.handleClick}>
                    <img className="cardPics" src={this.props.cardPic} alt="Bull"/>
                </button>
            </div>
        );
    }
}
 
export default Back;