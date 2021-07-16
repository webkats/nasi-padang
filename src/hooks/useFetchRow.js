import qoreContext from "../context/qoreContext";

export default function useFetchRow(slug, id) {
  const { data, status, error } = qoreContext.view(slug).useGetRow(id);
  return [data, status, error];
}
