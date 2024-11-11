import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import * as colors from "../config/color";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
* {
margin: 0;
padding : 0;
outline: none;
box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: ${colors.primaryDarkColor};
  color: ${colors.primaryDarkColor};
}

html, body, #root {
  height: 100%;
}
button {
  cursor: pointer;
  background: ${colors.primaryColor};
  color: #fff;
  border: none;
  font-weight: 700;
  border-radius: 5px;
  padding: 10px 20px;
  transition: all 300ms;
}
button:hover {
 filter: brightness(80%);
}
a {
  text-decoration: none;
}

ul {
  list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${colors.successColor};
  color: white;
  font-weight: 700;
  border-radius: 5px;
}
body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
  color: black;
  font-weight: 700;
  border-radius: 5px;
}
`;

export const Container = styled.section`
  max-width: 700px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
