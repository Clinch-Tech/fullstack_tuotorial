import { useEffect, useState } from "react";

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSucced, setHasSucced] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        // api calls

        // setData(//api bata aako
        setHasSucced(true);
        setIsLoading(false);
      } catch (e) {
        hasSucced(false);
      }
    }
  }, [url]);

  refetch(() => {});

  return { isLoading, hasSucced, data };
}
