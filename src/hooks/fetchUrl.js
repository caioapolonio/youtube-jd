import { useState, useEffect } from "react";

const useFetchDataByUrl = (baseUrl, id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataByUrl = async () => {
      try {
        const response = await fetch(`${baseUrl}/${id}`);
        if (!response.ok) {
          throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchDataByUrl();
    }
  }, [baseUrl, id]);

  return { data, loading, error };
};

export default useFetchDataByUrl;
