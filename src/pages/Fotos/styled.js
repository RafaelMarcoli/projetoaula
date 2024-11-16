import styled from "styled-components";
import * as color from "../../config/color";

export const Title = styled.h1`
  text-align: center;
`;
export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    border: 5px dashed ${color.primaryColor};
    margin: 30px auto;
    cursor: pointer;
    border-radius: 50%;
    font-size: 25px;
    overflow: hidden;

    img {
      width: 180px;
      height: 180px;
    }
  }
  input {
    display: none;
  }
`;
