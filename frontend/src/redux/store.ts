import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware, routerReducer } from "react-router-redux";
import { createBrowserHistory } from "history";
import { useDispatch } from "react-redux";
import rootSaga from "./rootSaga";

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const connectedRouterMiddleware = routerMiddleware(history);

const store = configureStore({
  reducer: {
    routing: routerReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(connectedRouterMiddleware, sagaMiddleware),
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
export { history };