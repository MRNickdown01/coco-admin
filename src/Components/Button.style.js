import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  font-size: 15px;
  padding: 0.5em 4.2em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 700;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;

  :hover {
    border-color: rgba(255, 255, 255, 1);
  }
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
`;
export const Input = styled.input`
  input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: 2px solid #2ecc71;
    border-radius: 10px;
    outline: none;
    padding: 0px 10px;
  }
  label {
    position: absolute;
    top: 15px;
    left: 15px;
    color: rgb(22, 22, 22);
    text-transform: capitalize;
    font-size: 18px;
    transition: top 0.3s;
    padding: 0 5px;
  }
  input:focus ~ label {
    top: -12px;
    background-color: #fff;
  }
`;
