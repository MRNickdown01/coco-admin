import styled from "styled-components";

export const Button = styled.button`
    box-sizing: border-box;
    display: block;
    font-family: Roboto,sans-serif;
    font-weight: 700;
    margin: 0 0.3em 0.3em 0;
    padding: 0.8em 0;
    text-align: center;
    text-decoration: none;
    transition: all .2s;
    width:15rem;
    border:#0A3724;
}

// :active {
//     -webkit-transform: scale(0.80);
//     -moz-transform: scale(0.80);
//     -ms-transform: scale(0.80);
//     -o-transform: scale(0.80);
//     transform: scale(0.80);
// }
// block {
//     display: block !important;
// }
// circular {
//   border-radius: 50em !important;
// }


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
