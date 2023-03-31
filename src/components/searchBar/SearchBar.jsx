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

  const searchPokemon = () => {
    props.updateSearch(pokemonName);
  };

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
