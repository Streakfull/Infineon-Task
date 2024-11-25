import { Saga } from "redux-saga";
import { all } from "redux-saga/effects";
// import auth from "../Auth/redux/sagas";
// import questions from "../redux/sagas/questions";
// import questionSearch from "../QuestionSearch/redux/sagas";
// import caseStudies from "./sagas/caseStudies";

function* rootSaga() {
  yield all([].map((saga: Saga) => saga()));
}

export default rootSaga;
