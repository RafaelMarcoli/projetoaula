import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const createPersistedReducer = (reducers) => {
  const persistReducers = persistReducer(
    {
      key: "CONSUMO-API1",
      storage,
      whitelist: ["auth"],
    },
    reducers,
  );
  return persistReducers;
};

export default createPersistedReducer;
