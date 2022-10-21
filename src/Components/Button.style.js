import styled from "styled-components";

export const Button = styled.button`

    padding: 1em 3.1em 1.1em;
    border:none;
    border-radius: 3px;
    margin: 8px 8px 8px 8px;
    background-color: #fbdedb;
    display: inline-block;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    font-family: sans-serif;
    font-weight: 800;
    font-size: .85em;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    -webkit-box-shadow: 0em -0.3rem 0em rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow: 0em -0.3rem 0em rgba(0, 0, 0, 0.1) inset;
    box-shadow: 0em -0.3rem 0em rgba(0, 0, 0, 0.1) inset;
    position: relative;
}
// :hover,:focus {
//     opacity: 0.8;
// }
:active {
    -webkit-transform: scale(0.80);
    -moz-transform: scale(0.80);
    -ms-transform: scale(0.80);
    -o-transform: scale(0.80);
    transform: scale(0.80);
}
block {
    display: block !important;
}
circular {
  border-radius: 50em !important;
}


/* Colours */

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
