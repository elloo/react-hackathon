import React, {Component} from 'react';
import './App.css';
import Card from "./components/Card";
import Score from "./components/Score";

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
      points: 0
      // cardPics: [{"location": "../images/bull.png", num: 0}, {"location": "../images/temple.png", num: 0}, {"location": "../images/bahai.png", num: 0}]
    }
  }

  randomisePics (cardPics) {
    let randArr=[], randNum
    while(cardPics.length > 0){
      randNum = Math.floor(Math.random()*cardPics.length)
      randArr.push(cardPics[randNum].location);
      cardPics[randNum].num += 1;
      if(cardPics[randNum].num===2){
        cardPics.splice(randNum, 1)
      }
    }
    this.setState({cardPics: [...randArr]});
  }

  addPoint(score){
    score++;
    this.setState({points: score});
  }

  componentDidMount() {
    this.randomisePics(this.state.cardPics);
  }

  render(){
    return (
      <div className="App">
        <Score points={this.state.points} addPoint={this.addPoint}/>
        <Card cardPics={this.state.cardPics} />
      </div>
    );
  }
}

export default App;
