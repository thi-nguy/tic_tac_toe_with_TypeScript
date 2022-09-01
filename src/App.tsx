import "./App.css";
import React from "react";
import Board from "./components/Board";

function App() {
  const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
  return (
    <div className="App">
      <Board board_value = {board} />
    </div>
  );
}

export default App;
