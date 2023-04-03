import { useEffect, useState } from "react";
import axios from "axios";

const useFetchPut = () => {
  
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  useEffect(() => {}, [state]);

  const putFetch = async (baseURL, body, header) => {
    setState({ ...state, isLoading: true });

    try {
      const response = await axios.put(baseURL, body, header);
      setState({ data: response.data, isLoading: false, hasError: null });
    } catch (error) {
      console.log(error, 'Error catch');
      setState({ data: error.response.data, isLoading: false, hasError: error });
    }
  };
  return { putFetch, ...state };
};

export default useFetchPut;
