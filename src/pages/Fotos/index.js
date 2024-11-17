import React, { useEffect, useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import { Title, Form } from "./styled";
import axios from "../../service/axios";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "lodash";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import * as actions from "../../store/modules/auth/action";

export default function Fotos() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [foto, setFoto] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/alunos/${id}`);
        const fotoUrl = get(data, "Fotos[0].url", "");

        // Substituindo 'http://' por '/images/' para usar o proxy
        const proxyFotoUrl = fotoUrl
          ? fotoUrl.replace("http://", "/images/")
          : "";

        setFoto(proxyFotoUrl);
      } catch {
        toast.error("Erro ao obter imagem");
        navigate("/");
      }
    };

    getData();
  }, [id, navigate]);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const fotoURL = URL.createObjectURL(file);
    setFoto(fotoURL);

    const formData = new FormData();
    formData.append("aluno_id", id);
    formData.append("foto", file);

    try {
      await axios.post("/fotos/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Foto enviada com sucesso");
    } catch (err) {
      const { status } = get(err, "response", "");
      toast.error("Erro ao enviar foto");

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Title>Fotos</Title>

      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="foto" /> : "Selecionar"}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}
