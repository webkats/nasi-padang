import qoreContext from "../context/qoreContext";

export default function useFetchRow(slug, RowId) {
  const { data, status, error } = qoreContext.view(slug).useGetRow(RowId);
  return [data, status, error];
}
