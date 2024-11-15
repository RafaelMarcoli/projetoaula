import styled from "styled-components";
import { Link } from "react-router-dom";

export const AlunoContainer = styled.div`
  margin-top: 15px;
  .icon-container {
    display: flex;
    align-items: center;

    gap: 10px;
  }
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

export const NovoAluno = styled(Link)`
  display: block;
  padding: 10px 0;
  font-weight: 700;
`;
