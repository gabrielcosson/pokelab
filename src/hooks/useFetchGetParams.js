import { useEffect, useState } from "react";
import axios from "axios";

const useFetchGetParams = () => {
  const [state, setState] = useState({
    data: null,
    isLoadin: true,
    hasError: null,
  });
  useEffect(() => {
  }, [state]);

  const getFetchParam = async (baseURL, params) => {
    setState({ ...state, isLoadin: true });
     try {
       const response = await axios.get(baseURL, params);
       setState({ data: response.data, isLoading: false, hasError: null });
     } catch (error) {
       setState({
         data: error.response.data,
         isLoading: false,
         hasError: error,
       });
     }
  };
  
  return { getFetchParam, ...state };

};

export default useFetchGetParams;
