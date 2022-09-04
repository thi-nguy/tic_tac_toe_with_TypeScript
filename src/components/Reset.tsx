import React from "react";
import StyledReset from "./styles/StyledReset";

interface ResetProps {
    reset_onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Reset: React.FC<ResetProps> = ({ reset_onClick }) => {
  return <StyledReset onClick={reset_onClick}>Reset</StyledReset>
};

export default Reset;
