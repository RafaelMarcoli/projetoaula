import React from "react";

import Login from "./pages/Login";
import GlobalStyle from "./styles/GlobalStyles";
import { Container } from "./styles/GlobalStyles";

function App() {
  return (
    <Container>
      <Login />
      <GlobalStyle />
    </Container>
  );
}

export default App;
