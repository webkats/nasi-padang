import {
  SET_SHOW_MODAL,
  SET_LOGIN,
  SET_SHOW_SIDEBAR,
} from "./globalActionTypes";

export function setLogin(payload) {
  return { type: SET_LOGIN, payload };
}

export function setShowModal(payload) {
  return { type: SET_SHOW_MODAL, payload };
}

export function setShowSidebar(payload) {
  return { type: SET_SHOW_SIDEBAR, payload };
}
