import React from "react";
import StyledBox from "./styles/StyledBox";

type BoxProps = {
    box_value: string;
    box_id: number;
};

const Box = ({ box_value, box_id }: BoxProps) => {
  return <StyledBox value={box_value}> {box_value} </StyledBox>;
};

export default Box;
