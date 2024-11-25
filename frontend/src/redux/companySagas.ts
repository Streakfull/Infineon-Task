import { put, takeLatest, call, take } from "redux-saga/effects";
import { actions } from "./companies";
import { PayloadAction } from "@reduxjs/toolkit";
import { endpoints } from "../constants";
import Axios from "../classes/Axios";

function* fetchCompanies(
  action: PayloadAction<{
    page: number;
    showAll?: true;
    search?: string;
    sort?: string;
  }>
) {
  try {
    const axios = new Axios(endpoints.companies);
    const { data } = yield call([axios, axios.axiosRequest], {
      requestData: {
        params: {
          ...action.payload,
        },
      },
    });
    const { data: companies, meta } = data;
    yield put(actions.fetchRequestSuccess({ meta, companies }));
  } catch (error) {
    yield put(actions.fetchRequestFailure());
  }
}

function* watchFetchRequest() {
  yield takeLatest(actions.fetchRequest, fetchCompanies);
}

const sagas = [watchFetchRequest];

export default sagas;
