import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ICompany {
  name: string;
  description: string;
  foundingDate: string;
  imageUrl?: string;
  _id: string;
}

interface ICompanies {
  loadingFetch: boolean;
  loadingCreate: boolean;
  loadingEdit: boolean;
  companies: ICompany[];
  meta?: IMeta;
}
interface IMeta {
  total_entries: number;
  current_page: number;
  next_page: number | null;
  per_page: number;
  previous_page: number | null;
}

const initialState: ICompanies = {
  loadingFetch: false,
  loadingCreate: false,
  loadingEdit: false,
  companies: [],
};

const slice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    fetchRequest: (
      state,
      action: PayloadAction<{
        page: number;
        showAll?: true;
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
  },
});

export type { ICompany };
const selector = (state: RootState) => state.companies;

const actions = { ...slice.actions };

export { actions, selector };
export default slice.reducer;
