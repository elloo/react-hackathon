import React, {Component} from "react";
import Card from "./Card";

class Board extends Component {
    constructor(props) {
        super(props);
        console.log("BOARD PROPS-------", props)
        this.state = { 
            card: Array(16).fill(null)
         }
    }

    makeCards(i) {
        return <Card value={this.props.cardPics[i]} />;
    }

    render() { 
        return ( 
            <div>
                {this.props.cardPics.map(pic => <Card cardPic={pic} />)}
            </div>
        );
    }
}
 
export default Board;