import { useEffect, useState } from "react";
import axios from "axios";

const useFetchPost = () => {
  const [state, setState] = useState({
    data: null,
    isLoadin: true,
    hasError: null,
  });
  const getFetch = async (baseURL, body, header) => {
     setState({ ...state, isLoadin: true });
     const resp = await axios.post(baseURL, body).then((response) => {
       setState({ data: response.data, isLoadin: false, hasError: null });
     });
     
     return {
       data: state.data,
       isLoadin: state.isLoadin,
       hasError: state.hasError,
     };
   };
  return { getFetch };
};
export default useFetchPost;

