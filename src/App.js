import React, {Component} from 'react';
import './App.css';
import Card from "./components/Card";

class App extends Component {
  constructor(){
    super()
    this.state = {
      cardPics: ["../images/bull.png", "../images/flag.png"]
    }
  }

  render(){
    return (
      <div className="App">
        {this.state.cardPics.map(
          img => {return( <Card img={img} /> )}
        )}
      </div>
    );
  }
}

export default App;
