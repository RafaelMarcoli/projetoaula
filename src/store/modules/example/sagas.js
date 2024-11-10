import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as actions from "./action";
import * as types from "../types";

const requisiçao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(requisiçao);
    yield put(actions.clicaBotaoSuccess());
  } catch {
    toast.error("Deu error.");
    yield put(actions.clicaBotaoFailure());
  }
}
export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
