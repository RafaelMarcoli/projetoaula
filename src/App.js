import React from "react";

import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
