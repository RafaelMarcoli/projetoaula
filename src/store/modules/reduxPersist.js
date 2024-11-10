import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const createPersistedReducer = (reducers) => {
  const persistReducers = persistReducer(
    {
      key: "REACT-BASE1",
      storage,
      whitelist: ["example"], // Adicione aqui os reducers que deseja persistir
    },
    reducers,
  );
  return persistReducers;
};

export default createPersistedReducer;
