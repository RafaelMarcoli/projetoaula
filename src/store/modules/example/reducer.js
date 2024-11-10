import * as types from "../types";

// Defina um estado inicial para evitar que ele comece como `undefined`.
const initialState = {
  botaoClicado: false,
};

// Redefina seu reducer para trabalhar com o estado inicial.
export default function exemplos(state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log("deu Success");
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;

      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log("deu error");
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log("estou fazendo a requisiçao");
      return state;
    }
    default: {
      return state;
    }
  }
}
