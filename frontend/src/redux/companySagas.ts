import { put, takeLatest, call, take } from "redux-saga/effects";
import { actions, ICompany } from "./companies";
import { PayloadAction } from "@reduxjs/toolkit";
import { endpoints } from "../constants";
import Axios, { ERequestMethods } from "../classes/Axios";

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
          show_all: action.payload.showAll,
        },
      },
    });
    const { data: companies, meta } = data;
    yield put(actions.fetchRequestSuccess({ meta, companies }));
  } catch (error) {
    yield put(actions.fetchRequestFailure());
  }
}

function* deleteCompany(
  action: PayloadAction<{
    id: string;
  }>
) {
  const { id } = action.payload;
  try {
    const axios = new Axios(`${endpoints.companies}/${id}`);
    yield call([axios, axios.axiosRequest], {
      method: ERequestMethods.DELETE,
    });
    yield put(actions.deleteSuccess({ id }));
  } catch (error) {
    yield put(actions.deleteFailure({ id }));
  }
}

function* createCompany(
  action: PayloadAction<{
    company: Partial<ICompany>;
  }>
) {
  try {
    const axios = new Axios(`${endpoints.companies}`);
    const { data } = yield call([axios, axios.axiosRequest], {
      method: ERequestMethods.POST,
      requestData: {
        body: action.payload.company,
      },
    });

    yield put(actions.createCompanySuccess({ company: data.company }));
  } catch (error: any) {
    yield put(actions.createCompanyFailure({ errorMsg: error?.response?.data?.message }));
  }
}

function* editCompany(
  action: PayloadAction<{
    company: Partial<ICompany>;
    id: string;
  }>
) {
  const { id, company } = action.payload;
  try {
    const axios = new Axios(`${endpoints.companies}/${id}`);
    const { data } = yield call([axios, axios.axiosRequest], {
      method: ERequestMethods.PUT,
      requestData: {
        body: company,
      },
    });

    yield put(actions.editCompanySuccess({ company: data.company }));
  } catch (error: any) {
    yield put(actions.editCompanyFailure({ errorMsg: error?.response?.data?.message }));
  }
}

function* watchFetchRequest() {
  yield takeLatest(actions.fetchRequest, fetchCompanies);
}

function* watchDeleteRequest() {
  yield takeLatest(actions.deleteRequest, deleteCompany);
}

function* watchCreateCompany() {
  yield takeLatest(actions.createCompanyRequest, createCompany);
}

function* watchEditCompany() {
  yield takeLatest(actions.editCompanyRequest, editCompany);
}

const sagas = [
  watchFetchRequest,
  watchDeleteRequest,
  watchCreateCompany,
  watchEditCompany,
];

export default sagas;
