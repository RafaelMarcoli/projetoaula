import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import createPersistedReducer from "./modules/reduxPersist";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSagas";

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = createPersistedReducer(rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
