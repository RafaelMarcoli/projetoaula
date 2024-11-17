import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "lodash";
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from "react-icons/fa";

import { Container } from "../../styles/GlobalStyles";

import { AlunoContainer, Pictures, NovoAluno } from "./styled";

import axios from "../../service/axios";
import { toast } from "react-toastify";

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("/alunos");
      setAlunos(response.data);
    }

    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute("display", "block");
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
    } catch (err) {
      const status = get(err, "response.status", 0);

      if (status === 401) {
        toast.error("Você precisa fazer login");
      } else {
        toast.error("Ocorreu um erro ao excluir aluno");
      }
    }
  };

  return (
    <Container>
      <h1>Alunos</h1>
      <NovoAluno to="/aluno/">
        <button>Cadastrar Aluno</button>
      </NovoAluno>
      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <Pictures>
              {get(aluno, "Fotos[0].url", false) ? (
                // Substituindo 'http://' por '/uploads/' para usar o proxy
                <img
                  src={aluno.Fotos[0].url.replace("http://", "/images/")}
                  alt=""
                />
              ) : (
                <FaUserCircle size={36} />
              )}
            </Pictures>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <div className="icon-container">
              <Link to={`/aluno/${aluno.id}/edit`} className="edit-icon">
                <FaEdit size={16} color="blue" />
              </Link>
              <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
                <FaWindowClose size={16} color="red" />
              </Link>

              <FaExclamation
                size={16}
                display="none"
                cursor="pointer"
                color="#0197F6"
                onClick={(e) => handleDelete(e, aluno.id, index)}
              />
            </div>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
