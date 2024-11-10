import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./modules/rootReducer";
// Configure a store com o `configureStore`.
const store = configureStore({
  reducer: rootReducer, // Passa o reducer diretamente
});

export default store;
