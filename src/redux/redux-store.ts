import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Action,
} from "redux";
import { reducer as formReducer } from "redux-form";
import logger from "redux-logger";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import {
  default as dialogsReducer,
  default as sidebarReducer,
} from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let rootReducer = combineReducers({
  app: appReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const middleware = [logger, thunkMiddleware];

export type InferActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

export type BaseThunkType<
  A extends Action = Action,
  R = Promise<void>
> = ThunkAction<R, AppStateType, unknown, A>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
