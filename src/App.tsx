import "./App.css";
import React, { useState } from "react";
import Board from "./components/Board";
import ScoresBoard from "./components/ScoresBoard";
import Reset from "./components/Reset";

function App() {
  interface IState {
    //May add other types of state here
    board: string[];
    xPlaying: boolean;
    gameOver: boolean;
    scores: {
      xScore: number;
      oScore: number;
    };
  }

  const WIN_CONDITION: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState<IState["board"]>(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState<IState["xPlaying"]>(true);
  const [gameOver, setGameOver] = useState<IState["gameOver"]>(false);
  const [scores, setScores] = useState<IState["scores"]>({xScore: 0, oScore: 0})

  const updateBoard = (index: number) => {
    setBoard((board) => {
      const new_board = board.map((value, id) => {
        if (!value && !gameOver && index === id) {
          setXPlaying(!xPlaying);
          return xPlaying ? "X" : "O";
        } else return value;
      });
      // check winner with new_board
      const winner = checkWinCondition(new_board);
      if (winner) {
        if (winner === "X" && !gameOver)
        {
          let xScore = scores.xScore;
          xScore += 1;
          setScores({...scores, xScore});
        }
        else if (winner === "O" && !gameOver)
        {
          let oScore = scores.oScore;
          oScore += 1;
          setScores({...scores, oScore});
        }
        setGameOver(true);
      }
      return [...new_board];
    });
  };

  const checkWinCondition = (board: IState["board"]): string => {
    for (let i = 0; i < WIN_CONDITION.length; i++)
    {
      const [x, y, z] = WIN_CONDITION[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z] )
        return board[x];
    }
    return ("");
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard ( Array(9).fill(null));
  }

  return (
    <div className="App">
      <ScoresBoard score_values={scores} xPlaying={xPlaying}/>
      <Board board_value={board} board_onClick={updateBoard} />
      <Reset reset_onClick={resetBoard}/>
    </div>
  );
}

export default App;
