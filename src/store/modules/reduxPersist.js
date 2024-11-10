import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistReducers = persistReducer(
    {
      key: "REACT-BASE1",
      storage,
      whitelist: ["example"],
    },
    reducers,
  );
  return persistReducers;
};
