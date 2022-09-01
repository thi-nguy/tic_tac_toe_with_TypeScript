import React from "react";
import StyledBoard from "./styles/StyledBoard";
import Box from "./Box";

type BoardProps = {
    board_value: string[];
}
const Board = ({ board_value }: BoardProps) => {
  return (
    <StyledBoard>{ board_value.map( (value, index) => { 
        return (
            <Box box_value={value} box_id={index} /> 
        )
    })}</StyledBoard>
  );
};

export default Board;
