import React, {Component} from "react";
import ReactCardFlip from 'react-card-flip';
import Front from "./Front";
import Back from "./Back";


export default class MakeCard extends Component {
    constructor(props) {
      super(props);
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }

    //flips card on click
    handleClick (e) {
      e.preventDefault();
      console.log("CARD PROPS-------**", this.props)
      if(this.props.comparisonArr.length===1 && this.props.comparisonArr[0]!==this.props.comparisonArr[1]){
        console.log("BLIP blip")
      
    }
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      if(this.state.isFlipped===false){
        this.props.incCount(this.props.cardPic);
        this.props.addTurn();
      }
    }


    render() {
      return (
        <div>
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <Front handleClick={this.handleClick} />
            <Back handleClick={this.handleClick} cardPic={this.props.cardPic}/>
          </ReactCardFlip>
        </div>
      )
    }
  }