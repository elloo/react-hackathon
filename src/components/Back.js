import React, {Component} from "react";

class Back extends Component {
    constructor(props) {
        super(props);
        this.state = {
         }
    }

    randomNum = () => {
        return Math.floor(Math.random() * 9)
    }


    render() { 
        return (
            <div key="back">
                <button>
                    <img className="cardPics" src={this.props.cardPic} alt="Bull"/>
                </button>
            </div>
        );
    }
}
 
export default Back;