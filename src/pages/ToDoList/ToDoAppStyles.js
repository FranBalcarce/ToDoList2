import styled from "styled-components";

export const ListContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  background: linear-gradient(to right, #232526, #414345);
  box-sizing: border-box;
  border-radius: 2rem;
`;

export const ListTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    font-size: 4rem;
    color: grey;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  label {
    font-size: 2rem;
    font-family: Georgia, "Times New Roman", Times, serif;
    color: grey;
  }
  input {
    color: black;
    border-radius: 1.5rem;
    font-size: 1rem;
    background: linear-gradient(to right, #485563, #29323c);
    border: 0.5px solid grey;
  }
  input::placeholder {
    color: black;
  }

  button {
    border-radius: 1.5rem;
    font-size: 1rem;
    background: linear-gradient(to right, #485563, #29323c);
    color: black;
    border: black 1px solid;
    font-weight: 500;
    cursor: pointer;
  }
`;
