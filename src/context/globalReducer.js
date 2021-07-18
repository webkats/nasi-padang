import { SET_SHOW_MODAL, SET_LOGIN } from "./globalActionTypes";

export default function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_SHOW_MODAL:
      return { ...state, isShowModal: payload };
    case SET_LOGIN:
      return { ...state, isLoggedIn: payload };
    default:
      return state;
  }
}
