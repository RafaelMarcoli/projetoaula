import styled from "styled-components";
import * as color from "../../config/color";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  margin-top: 10px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 5px;
    margin-top: 5px;

    &:focus {
      border: 1px solid ${color.primaryColor};
    }
  }
`;
