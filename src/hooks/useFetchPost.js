import { useEffect, useState } from "react";
import axios from "axios";

const useFetchPost = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const postFetch = async (baseURL, body, header) => {
    setState({ ...state, isLoading: true });

    try {
      const response = await axios.post(baseURL, body, header);
      setState({ data: response.data, isLoading: false, hasError: null });
    } catch (error) {
      setState({ data: null, isLoading: false, hasError: error });
    }
  };

  return { postFetch, ...state };
};

export default useFetchPost;
