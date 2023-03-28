import { useEffect, useState } from "react";
import axios from "axios";
const useFetchGet = (baseURL) => {
  const [state, setState] = useState({
    data: null,
    isLoadin: true,
    hasError: null,
  });
  const getFetch = async () => {
    setState({ ...state, isLoadin: true });
    try {
      const resp = await axios.get(baseURL).then((response) => {
        setState({ data: response.data, isLoadin: false, hasError: null });
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFetch();
  }, [baseURL]);

  return {
    data: state.data,
    isLoadin: state.isLoadin,
    hasError: state.hasError,
  };
};
export default useFetchGet;
