import qoreContext from "../context/qoreContext";

export default function useEditRelation(slug, RowId) {
  const { addRelation, removeRelation, statuses, errors } = qoreContext
    .view(slug)
    .useRelation(RowId);

  const handleAddRelation = async (rowName, TargetId) => {
    await addRelation({
      [rowName]: [TargetId],
      // links: links.map((link) => link.id),
    });
  };

  const handleRemoveRelation = async (rowName, TargetId) => {
    await removeRelation({
      [rowName]: [TargetId],
    });
  };

  return [handleAddRelation, handleRemoveRelation, statuses, errors];
}
