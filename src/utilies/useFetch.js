import { useCallback } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGOTData = useCallback(async () => {
    const response = await axios.get(url);
    const dataGOT = await response.data;

    setLoading(false);
    setData(dataGOT);
  }, [url]);

  useEffect(() => {
    fetchGOTData();
  }, [fetchGOTData]);

  return { loading, data };
};
