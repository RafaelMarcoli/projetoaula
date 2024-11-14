import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as actions from "./action";
import * as types from "../types";
import axios from "../../../service/axios";
import { get } from "lodash";

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, "/tokens", payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success("Login concluido");

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    payload.navigate(payload.prevPath);
  } catch (e) {
    toast.error("Usuário ou Senha Inválidos.");

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, "auth.token", "");
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  const { id, nome, email, password, navigate } = payload;

  try {
    if (id) {
      yield call(axios.put, "/users", {
        nome,
        email,
        password: password || undefined,
      });
      toast.success("Conta editada com success");

      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, "/users", {
        nome,
        email,
        password,
      });
      toast.success("Conta criada com sucesso");
      yield put(actions.registerCreatedSuccess({ nome, email, password }));
      navigate("/login");
    }
  } catch (e) {
    const errors = get(e, "response.data.errors", []);
    const status = get(e, "response.status", 0);

    if (status === 401) {
      toast.error("Precisa fazer Login novamente.");
      yield put(actions.loginFailure());
      return navigate("/login");
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error("Error desconhecido");
    }
    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
