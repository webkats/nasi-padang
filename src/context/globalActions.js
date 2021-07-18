import { SET_SHOW_MODAL, SET_LOGIN } from "./globalActionTypes";

export function setLogin(payload) {
  return { type: SET_LOGIN, payload };
}

export function setShowModal(payload) {
  return { type: SET_SHOW_MODAL, payload };
}
