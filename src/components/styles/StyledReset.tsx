import styled from "styled-components";

const StyledReset = styled.button`
  width: 8rem;
  height: 3rem;
  font-family: "Fredoka One", sans serif;
  font-size: 2rem;
  font-weight: bold;
  background-color: rgb(44, 135, 255);
  border: none;
  box-shadow: 0px 0px 8px #888;
  border-radius: 10%;
  margin: 3rem auto;
  color: antiquewhite;
  display: flex;
  justify-content: space-evenly;

  &:hover {
    box-shadow: 0px 0px 16px #888;
  }
`;
export default StyledReset;
