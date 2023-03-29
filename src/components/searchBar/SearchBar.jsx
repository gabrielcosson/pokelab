import SearchBarStyle from "./SearchBar.module.css";
import searchIcon from "../../assets/search.png";
import { useEffect, useState } from "react";
import useFetchGetParams from "../../hooks/useFetchGetParams";

const SearchBar = (props) => {
  const [pokemonName, setPokemonName] = useState("");
  const [errorStatus, setErrorStatus] = useState("");
  const onPokemonNameChange = ({ target }) => {
    setPokemonName(target.value);
  };

  const { getFetchParam, data, isLoading, hasError } = useFetchGetParams();

  const searchPokemon = async () => {
    await getFetchParam(
      `http://localhost:8080/pokedex/${
        props.language
      }/pokemon?value=${pokemonName.toLowerCase()}`
    );
  };
  useEffect(() => {
    if (hasError !== null) {
      console.warn("Este es el error ", hasError);
      setErrorStatus(hasError.response.data.message);
      return;
    }
    if (data?.name) {
      console.log("data desde barra", data);
    }
  }, [data]);

  return (
    <div className={SearchBarStyle.searchBar}>
      <div className={SearchBarStyle.searchForm}>
        <input
          type="text"
          placeholder="Pokemon Name or Pokemon ID..."
          onChange={onPokemonNameChange}
          value={pokemonName}
        ></input>
        <button
          className={SearchBarStyle.button}
          type="submit"
          onClick={searchPokemon}
        >
          <img className={SearchBarStyle.buttonIcon} src={searchIcon}></img>
          <h1 className={SearchBarStyle.buttonText}>Search</h1>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
