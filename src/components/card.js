import React, {Component} from "react";
import ReactCardFlip from 'react-card-flip';
import Front from "./Front";
import Back from "./Back";


export default class Card extends Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <Front handleClick={this.handleClick}/>
          <Back handleClick={this.handleClick} />
        </ReactCardFlip>
      )
    }
  }