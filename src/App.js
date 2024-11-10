import React from "react";

import GlobalStyle from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Routes from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={10000} className="toast-container" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
