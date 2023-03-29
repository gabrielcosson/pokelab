import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BurgerMenuContext } from "../components/context/burgerMenuContext";

const useFetchGetHeaders = (baseURL) => {

  const { globalUser } = useContext(BurgerMenuContext);

  const [state, setState] = useState({
    data: null,
    isLoadin: true,
    hasError: null,
  });
  
  useEffect(() => {}, [state]);

  const getFetch = async () => {
    setState({ ...state, isLoadin: true });
    try {
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
