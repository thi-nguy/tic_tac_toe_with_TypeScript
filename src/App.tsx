import "./App.css";
import React, { useState } from "react";
import Board from "./components/Board";

function App() {
  interface IState {
    //May add other types of state here
    board: string[];
    xPlaying: boolean;
    gameOver: boolean;
  }

  const [board, setBoard] = useState<IState["board"]>(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState<IState["xPlaying"]>(true);
  const [gameOver, setGameOver] = useState<IState["gameOver"]>(false);

  const updateBoard = (index: number) => {
    setBoard((board) => {
      const new_board = board.map((value, id) => {
        if (!value && !gameOver && index === id) {
          setXPlaying(!xPlaying);
          return xPlaying ? "X" : "O";
        } else return value;
      });
      // check winner with new_board
      return [...new_board];
    });
  };

  return (
    <div className="App">
      <Board board_value={board} board_onClick={updateBoard} />
    </div>
  );
}

export default App;
