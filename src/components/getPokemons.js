const baseURL =
  "http://localhost:8080/pokedex/pokemon-trainer/andres/pokemon?quantity=4&offset=0";
import axios from "axios";
export const getPokemons = async (connected, sortBy, filterByType) => {
  let provisionalUser;
  const user = await axios
    .get(baseURL, {
      headers: {
        connected: connected,
        sortBy: sortBy,
        filterByType: filterByType,
      },
    })
    .then((response) => {
      provisionalUser = response.data;
      /*   handlingError(response); */
      console.log("GET POKEMON", response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  return user;
};
