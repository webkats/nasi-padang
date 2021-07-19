import qoreContext from "../context/qoreContext";

export default function useInsertRow(slug) {
  const { insertRow, status } = qoreContext.view(slug).useInsertRow();
  return [insertRow, status];
}
