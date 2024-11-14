import React, { useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import * as actions from "../../store/modules/auth/action";

export default function Register() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  React.useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error("Nome deve ter entre 3 e 255 caracteres");
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error("E-mail invalido");
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error("Senha deve ter entre 6 e 50 caracteres");
    }

    if (formErrors) return;
    dispath(actions.registerRequest({ nome, email, password, id, navigate }));
  }

  return (
    <Container>
      <h1>{id ? "Editar dados" : "Crie sua Conta."}</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua Senha"
          />
        </label>

        <button type="submit">
          {id ? "Salvar dados" : "Criar minha conta"}
        </button>
      </Form>
    </Container>
  );
}
