import React from "react";
import { Routes, Route } from "react-router-dom";

import MyRoute from "./MyRoutes";

import Login from "../pages/Login";
import Aluno from "../pages/Aluno";
import Alunos from "../pages/Alunos";
import Fotos from "../pages/Fotos";
import Register from "../pages/Register";
import Page404 from "../pages/Page404";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<MyRoute element={Alunos} isClosed={false} />}
      />
      <Route
        exact
        path="/aluno/:id/edit"
        element={<MyRoute element={Aluno} isClosed />}
      />
      <Route
        exact
        path="/aluno/"
        element={<MyRoute element={Aluno} isClosed />}
      />
      <Route
        exact
        path="/fotos/:id"
        element={<MyRoute element={Fotos} isClosed />}
      />
      <Route exact path="/login" element={<MyRoute element={Login} />} />
      <Route exact path="/register" element={<MyRoute element={Register} />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
