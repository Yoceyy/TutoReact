import React from "react";
import Square from "./Square";

export default class Board extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          squares: Array(9).fill(null),
          last: null
      };
    }
  
    handleClick(i) {
      const squares = this.state.squares.slice();
      const next = this.getNext();
      console.log(next);
      squares[i] = next;
      this.setState({squares: squares, last: next});
    }

    getNext() {
        if (this.state==null || this.state.last==null) {
            return 'X';
        } else if (this.state.last==='O') {
            return 'X';
        } else {
            return 'O';
        }
    }

    renderSquare(i, next) {
      //console.log("render square");
      return (
        <Square next={next}
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = 'Prochain joueur : ';
        const next = this.getNext();
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0, next)}
            {this.renderSquare(1, next)}
            {this.renderSquare(2, next)}
          </div>
          <div className="board-row">
            {this.renderSquare(3, next)}
            {this.renderSquare(4, next)}
            {this.renderSquare(5, next)}
          </div>
          <div className="board-row">
            {this.renderSquare(6, next)}
            {this.renderSquare(7, next)}
            {this.renderSquare(8, next)}
          </div>
        </div>
      );
    }
  }