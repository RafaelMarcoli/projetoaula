// Defina um estado inicial para evitar que ele comece como `undefined`.
const initialState = {
  botaoClicado: false,
};

// Redefina seu reducer para trabalhar com o estado inicial.
export default function exemplos(state = initialState, action) {
  switch (action.type) {
    case "BOTAO_CLICADO": {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;

      return newState;
    }
    default: {
      return state;
    }
  }
}
