import React, {Component} from "react";
import ReactCardFlip from 'react-card-flip';
import Front from "./Front";
import Back from "./Back";


export default class Card extends Component {
    constructor(props) {
      super(props);
        this.state = {
        isFlipped: false,
      };
      this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick (e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    // componentDidMount(){
    //   randomNum = () => {
    //     return Math.floor(Math.random() * 2)
    //   }
    // }

    render() {
      return (
        <div>
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <Front handleClick={this.handleClick}/>
            <Back handleClick={this.handleClick} cardPic={this.props.cardPics}/>
          </ReactCardFlip>
{/* 
          <button className="square">
             {this.props.value}
          </button> */}
        </div>
      )
    }
  }