import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { isEmail, isInt, isFloat } from "validator";
import { toast } from "react-toastify";
import { get } from "lodash";
import { useDispatch } from "react-redux";
import * as actions from "../../store/modules/auth/action";
import { FaUserCircle, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container } from "../../styles/GlobalStyles";
import { Form, ProfilePicture } from "./styled";
import axios from "../../service/axios";

export default function Aluno() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [foto, setFoto] = useState("");

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, "Fotos[0].url", "");

        // Substitui http:// por https:// na URL da foto, se necessário
        const secureFotoUrl = Foto ? Foto.replace("http://", "https://") : "";

        setFoto(secureFotoUrl);

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
      } catch (err) {
        const status = get(err, "response.status", 0);
        const errors = get(err, "response.data.errors", []);

        if (status === 400) errors.map((error) => toast.error(error));
        navigate("/");
      }
    }
    getData();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErros = false;

    if (nome.length < 3 || nome.length > 255) {
      toast.error("Nome precisa ter entre 3 e 255 caracteres");
      formErros = true;
    }
    if (sobrenome.length < 3 || sobrenome.length > 255) {
      toast.error("Sobrenome precisa ter entre 3 e 255 caracteres");
      formErros = true;
    }

    if (!isEmail(email)) {
      toast.error("E-mail invalido");
      formErros = true;
    }
    if (!isInt(String(idade))) {
      toast.error("Idade Invalida");
      formErros = true;
    }
    if (!isFloat(String(peso))) {
      toast.error("Peso Invalido");
      formErros = true;
    }
    if (!isFloat(String(altura))) {
      toast.error("Altura Invalida");
      formErros = true;
    }
    if (formErros) {
      return;
    }

    try {
      if (id) {
        // Editando
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success("Aluno(a) editado(a) com sucesso");
      } else {
        // Criando
        const { data } = await axios.post(`/alunos/`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success("Aluno(a) criado(a) com sucesso");
        navigate(`/aluno/${data.id}/edit`);
      }
    } catch (err) {
      const status = get(err, "response.status", 0);
      const data = get(err, "response.data", {});
      const errors = get(data, "errors", []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error("Error Desconhecido");
      }
      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <h1>{id ? "Editar Aluno" : "Criar Aluno"}</h1>

      {id && (
        <ProfilePicture>
          {foto ? <img src={foto} alt={nome} /> : <FaUserCircle size={100} />}
          <Link to={`/fotos/${id}`}>
            <FaEdit size={17} color="blue" />
          </Link>
        </ProfilePicture>
      )}

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder="Idade"
        />
        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso"
        />
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura"
        />

        <button type="submit">{id ? "Atualizar" : "Criar"}</button>
      </Form>
    </Container>
  );
}
