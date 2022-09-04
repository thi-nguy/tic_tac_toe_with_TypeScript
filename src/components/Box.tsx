import React from "react";
import StyledBox from "./styles/StyledBox";

interface BoxProps {
    box_value: string;
    box_onClick: React.MouseEventHandler<HTMLButtonElement>
};

const Box: React.FC<BoxProps> = ({ box_value, box_onClick }) => {
  return <StyledBox value={box_value} onClick={box_onClick}> {box_value} </StyledBox>;
};

export default Box;
