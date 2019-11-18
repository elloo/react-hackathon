import React, {Component} from "react";

class Back extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div key="back">
                This is the back of the card.
                <button onClick={this.props.handleClick}>Click to flip</button>
            </div>
        );
    }
}
 
export default Back;