import React from "react";
import StyledBoard from "./styles/StyledBoard";
import Box from "./Box";

interface BoardProps {
    board_value: string[];
    board_onClick: (index: number) => void;
}

const Board: React.FC <BoardProps> = ( {board_value, board_onClick}) => {
  return (
    <StyledBoard>{ board_value.map( (value, index) => { 
        return (
            <Box box_value={value} box_onClick={ () => board_onClick(index)} /> 
        )
    })}</StyledBoard>
  );
};

export default Board;
