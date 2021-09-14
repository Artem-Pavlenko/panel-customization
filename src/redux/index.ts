import { combineReducers, createStore } from "redux";

import { appReducer } from "./app";
import { customizationReducer } from "./customization";

export const rootReducer = combineReducers({
  app: appReducer,
  customization: customizationReducer,
});

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type AppAction = ReturnType<AppDispatch>;
export type AppState = ReturnType<typeof store.getState>;
