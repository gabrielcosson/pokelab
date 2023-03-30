import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../components/appContext/AppContext";

const useFetchGetHeaders = (baseURL) => {

  const { globalUser } = useContext(AppContext);

  const [state, setState] = useState({
    data: null,
    isLoadin: true,
    hasError: null,
  });
  
  useEffect(() => {}, [state]);

  const getFetch = async () => {
    setState({ ...state, isLoadin: true });
    try {
      console.log('globalUser en useFetch Header');
      const resp = await axios.get(baseURL, {headers: {
        'connected': globalUser.username
      }}).then((response) => {
        setState({ data: response.data, isLoadin: false, hasError: null });
      });
    } catch (error) {
      console.log(error, 'Error catch en useFetchGet');
      setState({
        data: null,
        isLoading: false,
        hasError: error,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [baseURL]);

  return {getFetch, ...state};
};

export default useFetchGetHeaders;
