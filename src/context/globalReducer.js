import {
  SET_SHOW_MODAL,
  SET_LOGIN,
  SET_SHOW_SIDEBAR,
} from "./globalActionTypes";

export default function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_SHOW_MODAL:
      return { ...state, isShowModal: payload };
    case SET_LOGIN:
      return { ...state, isLoggedIn: payload };
    case SET_SHOW_SIDEBAR:
      return { ...state, isShowSidebar: payload };
    default:
      return state;
  }
}
