import axios from "axios";
import cookies from "js-cookie";

const baseUrl = "https://prod-qore-app.qorebase.io/eojD2G9qYNKquBK";

export default function useCreateRelation() {
  const createRelation = async ({
    slug,
    // tableName,
    RowId,
    targetCol,
    RowRef,
  }) => {
    await axios({
      url: `${baseUrl}/${slug}/rows/${RowId}/${targetCol}/${RowRef}`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies.get("token")}`,
      },
    });
  };

  return [createRelation];
}
