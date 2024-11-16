import styled from "styled-components";
import * as color from "../../config/color";

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    margin-bottom: 15px;
    padding-left: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 19px;
    font-weight: 500;

    &:focus {
      border: 1px solid ${color.primaryColor};
    }
  }
`;

export const ProfilePicture = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    transform: translate(-7px, 40px);
  }
`;
