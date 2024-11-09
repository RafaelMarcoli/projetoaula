import React from "react";

import GlobalStyle from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={10000} className="toast-container" />
    </BrowserRouter>
  );
}

export default App;
