import React, {Component} from 'react';
import './App.css';
import Score from "./components/Score";
import Board from "./components/Board";
import update from 'immutability-helper';

class App extends Component {
  constructor(){
    super()
    this.state = {
      cardPics: [ {"location": "../images/bull.png", num: 0}, 
                  {"location": "../images/temple.png", num: 0}, 
                  {"location": "../images/bahai.png", num: 0}, 
                  {"location": "../images/elephant.png", num: 0}, 
                  {"location": "../images/hindu.png", num: 0}, 
                  {"location": "../images/hindu2.png", num: 0}, 
                  {"location": "../images/mandolin.png", num: 0}, 
                  {"location": "../images/map.png", num: 0}],
      randArr: [],
      turnsTaken: 0
      // cardPics: [{"location": "../images/bull.png", num: 0}, {"location": "../images/temple.png", num: 0}, {"location": "../images/bahai.png", num: 0}]
    }
    this.addTurn = this.addTurn.bind(this);
    this.replaceCard = this.replaceCard.bind(this);
    this.randomisePics = this.randomisePics.bind(this);
  }

  componentDidMount(){
    this.randomisePics(this.state.cardPics)
  }

  replaceCard (card) {
    // let cardPics = this.state.cardPics
    let correctIndex = this.state.randArr.map((loc, index) => card === loc ? index : "").filter(String);
    let updatedArr =  update(this.state.randArr, {[correctIndex[0]]: {$set: "../images/tick2.png"}});
    updatedArr[correctIndex[1]] = "../images/tick2.png";
    this.setState({randArr: updatedArr})
    console.log("INDEX: ", correctIndex);
  }

  randomisePics (cardPics) {
    let randArrCopy = [...this.state.randArr]
    while(cardPics.length > 0){
      let randNum = Math.floor(Math.random()*cardPics.length)
      randArrCopy.push(cardPics[randNum].location);
      cardPics[randNum].num += 1;
      if(cardPics[randNum].num===2){
        cardPics.splice(randNum, 1)
      }
    }
    this.setState({randArr: randArrCopy})
  }

  addTurn(){this.setState(state => 
    ({turnsTaken: state.turnsTaken + 1})
  )}

  render(){
    return (
      <div className="App">
        <Score turnsTaken={this.state.turnsTaken}/>
        <Board cardPics={this.state.randArr} addTurn={this.addTurn} replaceCard={this.replaceCard}/>
      </div>
    );
  }
}

export default App;
