import { useState, useEffect } from "react";
import axios from "axios";
import qs from "query-string";

export default function useFetchRelationships(
  slug,
  RowId,
  target,
  { limit = 48, offset = "0", sort = "asc" }
) {
  const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetchRelationships();
    // eslint-disable-next-line
  }, []);

  const fetchRelationships = async () => {
    const baseUrl = "https://prod-qore-app.qorebase.io/eojD2G9qYNKquBK";
    const queryParams = qs.stringify({ limit, offset, sort });

    const { data: result } = await axios({
      url: `${baseUrl}/${slug}/rows/${RowId}/${target}?${queryParams}`,
    });

    setData(result.nodes);
  };

  return [data];
}
