import styled from "styled-components";

export const AlunoContainer = styled.div`
  margin-top: 15px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid red;
  }
`;

export const Pictures = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
