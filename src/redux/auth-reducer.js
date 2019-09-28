import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_SUCCESS = "samurai-network/auth/GET_CAPTCHA_SUCCESS";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth }
});

export const getCaptchaSuccess = captchaUrl => ({
  type: GET_CAPTCHA_SUCCESS,
  payload: { captchaUrl }
});

export const getAuthUserData = () => async dispatch => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (
  email,
  password,
  remember_me,
  captcha
) => async dispatch => {
  let response = await authAPI.login(email, password, remember_me, captcha);
  if (response.data.resultCode === 0) {
    // success, get auth data
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    let message = response.data.messages.length
      ? response.data.messages[0]
      : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = () => async dispatch => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  console.log(11111111);

  dispatch(getCaptchaSuccess(captchaUrl));
};

export const logout = () => async dispatch => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
