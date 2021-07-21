import qoreContext from "../context/qoreContext";

export default function useEditRelationDynamic(slug) {
  return (RowId) => {
    const { addRelation, removeRelation, statuses, errors } = qoreContext
      .view(slug)
      .useRelation(RowId);

    const handleAddRelation = async (colName, TargetId) => {
      // console.log(colName, TargetId);
      console.log(RowId, "<<< row id di handler");
      await addRelation({
        [colName]: [TargetId],
        // links: links.map((link) => link.id),
      });
    };

    const handleRemoveRelation = async (colName, TargetId) => {
      await removeRelation({
        [colName]: [TargetId],
      });
    };

    return [handleAddRelation, handleRemoveRelation, statuses, errors];
  };
}
