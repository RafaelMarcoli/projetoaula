import React from "react";
import { useDispatch } from "react-redux";

import { Title } from "./styled";
import { Container } from "../../styles/GlobalStyles";
import * as exampleActions from "../../store/modules/example/action";

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <p>Lorem ipsum dolor sit</p>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
