import qoreContext from "../context/qoreContext";

export default function useFetchTable(
  slug,
  { offset = 0, limit = 48, order = "asc" }
) {
  const { data, status, revalidate } = qoreContext.view(slug).useListRow({
    offset,
    limit,
    order,
  });

  return [data, status, revalidate];
}
