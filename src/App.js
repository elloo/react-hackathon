import React, {Component} from 'react';
import './App.css';
import Card from "./components/Card";

class App extends Component {
  constructor(){
    super()
    this.state = {
      // cardPics: ["../images/bull.png", "../images/temple.png", "../images/bahai.png", "../images/elephant.png", "../images/hindu.png", "../images/hindu2.png", "../images/mandolin.png", "../images/map.png"]
      cardPics: [{"location": "../images/bull.png", num: 0}, {"location": "../images/temple.png", num: 0}, {"location": "../images/bahai.png", num: 0}]
    }
  }

  randomisePics (cardPics) {
    let randArr=[], randNum
    while(cardPics.length > 0){
      randNum = Math.floor(Math.random()*cardPics.length)
      randArr.push(cardPics[randNum].location);
      if(cardPics[randNum].num==2){
        cardPics.splice(randNum, 1)
      }
    }
    this.setState({cardPics: [...randArr]})
    console.log(cardPics);
  }

  componentDidMount() {
    this.randomisePics(this.state.cardPics);
  }

  render(){
    return (
      <div className="App">
        {/* {this.state.cardPics.map(
          img => {return( <Card img={img} /> )}
        )} */}
        <Card cardPics={this.state.cardPics} />
        <Card cardPics={this.state.cardPics} />
        <Card cardPics={this.state.cardPics} />
      </div>
    );
  }
}

export default App;
