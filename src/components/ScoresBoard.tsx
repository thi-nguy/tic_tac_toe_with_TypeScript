import React from "react";
import StyledScoresBoard from "./styles/StyledScoresBoard";
import StyledScore from "./styles/StyledScore";

interface ScoresProps {
  score_values: {
    xScore: number;
    oScore: number;
  };
  xPlaying: boolean;
}


const ScoresBoard: React.FC <ScoresProps> = ({score_values, xPlaying}) => {
  return <StyledScoresBoard>
    <StyledScore value = "X" xPlaying={xPlaying}>X - {score_values.xScore}</StyledScore>
    <StyledScore value = "O" xPlaying={!xPlaying}>O - {score_values.oScore}</StyledScore>
  </StyledScoresBoard>;
};

export default ScoresBoard;
