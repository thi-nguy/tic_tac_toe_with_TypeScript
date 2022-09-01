import styled from "styled-components";

const StyledBox = styled.button`
  width: 5rem;
  height: 5rem;
  font-family: "Fredoka One", sans serif;
  font-size: 4rem;
  font-weight: bold;
  background-color: pink;
  border: none;
  box-shadow: 0px 0px 8px #888;
  border-radius: 10%;
  text-align: center;
  margin: 0.5rem;
  
  color: ${(props) => (props.value === "X" ? "red" : "rgb(44, 135, 255)")};

  &:hover {
    box-shadow: 0px 0px 16px #888;
  }
`;
export default StyledBox;
