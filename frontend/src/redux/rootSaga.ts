import { Saga } from "redux-saga";
import { all } from "redux-saga/effects";
import companySagas from "./companySagas";

function* rootSaga() {
  yield all([companySagas].flatMap(saga => saga).map((saga: Saga) => saga()));
}

export default rootSaga;
