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
                <button onClick={this.props.handleClick}>
                    <img className="cardPics" src="../images/flag.png" alt="Bull"/>
                </button>
            </div>
        );
    }
}
 
export default Front;