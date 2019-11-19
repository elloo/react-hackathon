import React, {Component} from "react";
import Card from "./Card";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // card: Array(16).fill(null),
            // counter: 0,
            comparisonArr: [],
            areSame: false
         }
        this.incCount = this.incCount.bind(this) 
    }

    incCount(card){
        // this.setState((state) =>({
        //     counter: state.counter + 1
        // }))
        let comparisonArr = this.state.comparisonArr;
        comparisonArr.push(card);
        if (comparisonArr[0] === comparisonArr[1]) {this.setState({areSame: true})};
        console.log(this.state.areSame, comparisonArr[0], comparisonArr[1]);
        if (this.state.areSame) {this.props.replaceCard(card)}
        if (comparisonArr.length > 1){this.setState({comparisonArr: []})} ;
        
    }

    // compareCards(){
    //     console.log("COMPARE CARDS")
        
    //     // this.setState({this.incCount});
    //     // this.setState({counter: this.state.counter + 1})
    // }

    render() { 
        return ( 
            <div className="board">
                {this.props.cardPics.map(pic => <Card cardPic={pic} incCount={this.incCount} addTurn={this.props.addTurn}/>)}
            </div>
        );
    }
}
 
export default Board;