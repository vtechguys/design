import { AsyncStatusEnum } from "../../common/api";
import { makeStore } from "../makestrore";
import { appReducer } from "./reducer";

const {
  Provider: AppProvider,
  useContextDispatch: useAppDispatch,
  useContextStore: useAppStore,
  useStoreAndDispatch: useApp,
} = makeStore("AppStore", appReducer);

const appInitState = {
  userLoadingStatus: AsyncStatusEnum.PENDING,
  user: null,
};

export { AppProvider, useApp, useAppStore, useAppDispatch, appInitState };
