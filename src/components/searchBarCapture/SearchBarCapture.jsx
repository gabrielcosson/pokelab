import SearchBarCaptureStyle from "./SearchBarCapture.module.css";
import searchIcon from "../../assets/search.png";
import { useEffect, useState } from "react";
import useFetchGetParams from "../../hooks/useFetchGetParams";

const SearchBarCapture = (props) => {
  const [pokemonName, setPokemonName] = useState("");
  const [errorStatus, setErrorStatus] = useState("");

  const onPokemonNameChange = ({ target }) => {
    setPokemonName(target.value);
  };
  const searchPokemon = () => {
    props.updateSearch(pokemonName);
  };
  return (
    <div className={SearchBarCaptureStyle.searchBar}>
      <div className={SearchBarCaptureStyle.searchForm}>
        <input
          type="text"
          placeholder="Search by Name or Nickname..."
          onChange={onPokemonNameChange}
          value={pokemonName}
        ></input>
        <button
          className={SearchBarCaptureStyle.button}
          type="submit"
          onClick={searchPokemon}
        >
          <img
            className={SearchBarCaptureStyle.buttonIcon}
            src={searchIcon}
          ></img>
          <h1 className={SearchBarCaptureStyle.buttonText}>Search</h1>
        </button>
      </div>
    </div>
  );
};

export default SearchBarCapture;
