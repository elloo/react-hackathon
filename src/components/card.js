import React, {Component} from "react";
import ReactCardFlip from 'react-card-flip';
import Front from "./Front";
import Back from "./Back";


export default class Card extends Component {
    constructor(props) {
      super(props);
      console.log("CARD PROPS-------", props)
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }

 
    handleClick (e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      console.log("FLIPPED STATE........", this.state.isFlipped)
      if(this.state.isFlipped===false){
        this.props.incCount(this.props.cardPic);
      }

    }


    render() {
      return (
        <div>
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <Front handleClick={this.handleClick}/>
            <Back handleClick={this.handleClick} cardPic={this.props.cardPic}/>
          </ReactCardFlip>
        </div>
      )
    }
  }