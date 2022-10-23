import styled from "styled-components";

export const Button = styled.button`

 display:inline-block;
 padding:0.80em 5.2em;
 border:0.1em solid #FFFFFF;
 margin:0 0.3em 0.3em 0;
 border-radius:0.12em;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color:#FFFFFF;
 text-align:center;
 transition: all 0.2s;
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
