import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import {
  default as dialogsReducer,
  default as sidebarReducer
} from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  app: appReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(logger, thunkMiddleware));

export default store;
