import React, {Component} from "react";
import MakeCard from "./MakeCard";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comparisonArr: [],
            areSame: false
         }
        this.incCount = this.incCount.bind(this) 
    }


    //keeps track of how many cards have been flipped and compares them
    incCount(card){
        let comparisonArr = this.state.comparisonArr;
        comparisonArr.push(card);
        
        if (comparisonArr[0] === comparisonArr[1]) {
            this.setState({areSame: true}, () => {
                this.props.replaceCard(card);
                this.setState({areSame: false});
            })
        };

        if (comparisonArr.length > 1){this.setState({comparisonArr: []})} ;   
    }


    render() { 
        return ( 
            <div className="board">
                {this.props.cardPics.map(pic => <MakeCard 
                                                cardPic={pic} 
                                                incCount={this.incCount} 
                                                addTurn={this.props.addTurn}
                                                comparisonArr={this.state.comparisonArr}
                                                frontImg={this.props.frontImg}
                                                />)}
            </div>
        );
    }
}
 
export default Board;

//pass comparison arr as a state/prop. when count==2 and not matching then remap anything that isnt a tick
