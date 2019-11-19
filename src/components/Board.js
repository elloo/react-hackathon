import React, {Component} from "react";
import Card from "./components/Card";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            card: Array(16).fill(null)
         }
    }

    makeCards(i) {
        return <Card value={i} />;
    }

    render() { 
        return ( 
            <div>
                <div className="board-row">
                    {this.makeCards(0)}
                    {this.makeCards(1)}
                    {this.makeCards(2)}
                </div>
                <div className="board-row">
                    {this.makeCards(3)}
                    {this.makeCards(4)}
                    {this.makeCards(5)}
                </div>
                <div className="board-row">
                    {this.makeCards(6)}
                    {this.makeCards(7)}
                    {this.makeCards(8)}
                </div>
            </div>
        );
    }
}
 
export default Board;