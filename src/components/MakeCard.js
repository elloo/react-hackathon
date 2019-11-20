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

    handleClick(e){
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      setTimeout(
        function(){
          this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
        }.bind(this), 
      1000)
      if(this.state.isFlipped===false){
        this.props.incCount(this.props.cardPic);
        this.props.addTurn();
      }
      if (this.props.comparisonArr[0] === this.props.comparisonArr[1]){
        clearTimeout();
      }
    }

    render() {
      return (
        <div>
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <Front handleClick={this.handleClick} frontImg={this.props.frontImg}/>
            <Back cardPic={this.props.cardPic}/>
          </ReactCardFlip>
        </div>
      )
    }
  }