import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchGet = (baseURL) => {
  const [state, setState] = useState({
    data: null,
    isLoadin: true,
    hasError: null,
  });
  const postFetch = async () => {
    setState({ ...state, isLoadin: true });
    const resp = await axios.get(baseURL).then((response) => {
      setState({ data: response.data, isLoadin: false, hasError: null });
    });
  };
  useEffect(() => {
    postFetch();
    return () => {};
  }, [baseURL]);

  return {
    data: state.data,
    isLoadin: state.isLoadin,
    hasError: state.hasError,
  };
};
