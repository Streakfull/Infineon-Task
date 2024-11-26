import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ICompany {
  name: string;
  description: string;
  foundingDate: string;
  imageUrl?: string;
  _id: string;
  score?: number;
}

interface ICompaniesState {
  loadingFetch: boolean;
  loadingCreate: boolean;
  loadingEdit: boolean;
  companies: ICompany[];
  meta?: IMeta;
  loadingDelete: string; // Id of company being deleted
  deletedIds: string[];
  feedback?: {
    message: string;
    isSuccess: boolean;
  };
  sortFilters?: string;
}
interface IMeta {
  total_entries: number;
  current_page: number;
  next_page: number | null;
  per_page: number;
  previous_page: number | null;
}

const initialState: ICompaniesState = {
  loadingFetch: false,
  loadingCreate: false,
  loadingEdit: false,
  loadingDelete: "",
  companies: [],
  deletedIds: [],
};

const slice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    fetchRequest: (
      state,
      action: PayloadAction<{
        page: number;
        showAll?: boolean;
        search?: string;
        sort?: string;
      }>
    ) => {
      state.loadingFetch = true;
    },

    fetchRequestSuccess: (
      state,
      action: PayloadAction<{ companies: ICompany[]; meta: IMeta }>
    ) => {
      const { companies, meta } = action.payload;
      state.companies = companies;
      state.meta = meta;
      state.loadingFetch = false;
    },

    fetchRequestFailure: state => {
      state.loadingFetch = false;
    },

    deleteRequest: (
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) => {
      state.loadingDelete = action.payload.id;
    },

    deleteSuccess: (
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) => {
      state.loadingDelete = "";
      state.deletedIds.push(action.payload.id);
    },

    deleteFailure: (
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) => {
      state.loadingDelete = "";
      state.deletedIds.push(action.payload.id);
    },

    createCompanyRequest: (
      state,
      action: PayloadAction<{
        company: Partial<ICompany>;
      }>
    ) => {
      state.loadingCreate = true;
    },

    createCompanySuccess: (
      state,
      action: PayloadAction<{
        company: ICompany;
      }>
    ) => {
      const { company } = action.payload;
      state.loadingCreate = false;
      state.companies = [company, ...state.companies];
      state.feedback = {
        message: `${company.name} Created`,
        isSuccess: true,
      };
    },

    createCompanyFailure: (state, action: PayloadAction<{ errorMsg: string }>) => {
      state.loadingCreate = false;
      state.feedback = {
        message: action.payload.errorMsg || "something went wrong",
        isSuccess: false,
      };
    },

    editCompanyRequest: (
      state,
      action: PayloadAction<{
        company: Partial<ICompany>;
        id: string;
      }>
    ) => {
      state.loadingEdit = true;
    },

    editCompanySuccess: (
      state,
      action: PayloadAction<{
        company: ICompany;
      }>
    ) => {
      state.loadingEdit = false;
      const index = state.companies.findIndex(
        company => company._id === action.payload.company._id
      );
      state.companies[index] = action.payload.company;
      state.feedback = {
        message: `${state.companies[index].name} Updated`,
        isSuccess: true,
      };
    },

    editCompanyFailure: (state, action: PayloadAction<{ errorMsg: string }>) => {
      state.loadingEdit = false;
      state.feedback = {
        message: action.payload.errorMsg || "something went wrong",
        isSuccess: false,
      };
    },

    resetFeedback: state => {
      state.feedback = undefined;
    },

    setSortFilters: (state, action: PayloadAction<{ sortFilters: string }>) => {
      state.sortFilters = action.payload.sortFilters;
    },
  },
});

export type { ICompany };
const selector = (state: RootState) => state.companies;

const actions = { ...slice.actions };

export { actions, selector };
export default slice.reducer;
