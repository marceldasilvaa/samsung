import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
      });
      setMethod(method);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);

      const json = await res.json();

      setData(json);
    };
    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      let json;
      if (method === "POST") {
        const fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        json = res.json();

      } else if (method === "DELETE") {
        const res = await fetch(url, config);
        json = await res.json();
      }
      setCallFetch(json);
    };
    httpRequest();
  }, [config, method, url]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { data, httpConfig };
};

export default useFetch;
