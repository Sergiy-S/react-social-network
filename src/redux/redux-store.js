import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./dialogs-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer
});

let store = createStore(reducers, applyMiddleware(logger));

export default store;
