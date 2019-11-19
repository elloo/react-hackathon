import React, {Component} from "react";
import Card from "./Card";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            card: Array(16).fill(null),
            counter: 0,
            areSame: []
         }
        this.incCount = this.incCount.bind(this) 
    }

    incCount(card){
        this.setState((state) =>({
            counter: state.counter + 1
        }))
        this.state.areSame.push(card)
        console.log("********SAME******",this.state.areSame)
    }

    compareCards(){
        console.log("COMPARE CARDS")
        
        // this.setState({this.incCount});
        // this.setState({counter: this.state.counter + 1})
    }

    render() { 
        return ( 
            <div className="board">
                {this.props.cardPics.map(pic => <Card cardPic={pic} incCount={this.incCount} />)}
            </div>
        );
    }
}
 
export default Board;