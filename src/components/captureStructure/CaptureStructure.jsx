import CaptureStructureStyle from "./CaptureStructure.module.css";
import { Component, useContext, useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import PokemonList from "../pokemonList/PokemonList";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import SearchLanguage from "../searchLanguage/SearchLanguage";
import { useParams } from "react-router-dom";
import InHeader from "../inHeader/InHeader";
import { AppContext } from "../appContext/AppContext";
import useFetchGetHeaders from "../../hooks/useFetchGetHeaders";
import SearchLanguageCapture from "../searchLanguageCaptures/SearchLanguageCapture";
import PaginationCaptures from "../paginationCaptures/PaginationCaptures";

const CaptureStructure = (props) => {
  const { language } = useParams();
  const [pageOffset, setPageOffset] = useState(0);
  const { widthBurgerMenu, widthList, globalUser } = useContext(AppContext);
  const [disabled, setDisabled] = useState(false);
  const [foundPokemon, setFoundPokemon] = useState("");
  const [url, setUrl] = useState(
    `http://localhost:8080/pokedex/pokemon-trainer/${globalUser.username}/pokemon?quantity=12&offset=${pageOffset}&language=${language}`
  );
  const [filteredPokemon, setFilteredPokemon] = useState(null);
  const { data, isLoadin, hasError } = useFetchGetHeaders(url);
  const {
    data: dataAll,
    isLoadin: isLoadingAll,
    hasError: hasErrorAll,
  } = useFetchGetHeaders(
    `http://localhost:8080/pokedex/pokemon-trainer/${globalUser.username}/pokemon?quantity=50&offset=${pageOffset}&language=${language}`
  );

  function updateSearch(pokemonName) {
    if(pokemonName !==''){
      setFoundPokemon(pokemonName);
    }else{
      setUrl(url);
      setFilteredPokemon(null);
    }
  }

  useEffect(() => {
    if (data != null) {
      if (data.results.length < 12) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [data]);

  useEffect(() => {
    if (foundPokemon !== "") {
      const pokemonExist = dataAll.results.filter(
        (name) => name.nickname === foundPokemon
      );
      const dataReplic = {...data, results:pokemonExist}
      setFilteredPokemon(dataReplic);
      
    } else {
      setUrl(url);
    }
  }, [foundPokemon]);

  useEffect(() => {

  }, [filteredPokemon]);
  

  return (
    <>
      <InHeader username={globalUser.username}></InHeader>
      <div className={CaptureStructureStyle.complete}>
        <div
          className={CaptureStructureStyle.burgerMenu}
          style={widthBurgerMenu}
        >
          <BurgerMenu
            language={language}
            userName={globalUser.name}
            userRole={globalUser.role}
          ></BurgerMenu>
        </div>
        <div className={CaptureStructureStyle.pokemonList} style={widthList}>
          <SearchLanguageCapture
            language={language}
            updateSearch={updateSearch}
          ></SearchLanguageCapture>
          <div className={CaptureStructureStyle.listHeader}>
            <div className={CaptureStructureStyle.titleContainer}>
              <h1 className={CaptureStructureStyle.title}>My Pokemons</h1>
            </div>
            <PaginationCaptures
              setPageOffset={setPageOffset}
              pageOffset={pageOffset}
              disabled={disabled}
            ></PaginationCaptures>
          </div>
          {isLoadin === true && <Spinner></Spinner>}
          {isLoadin === false && filteredPokemon === null && (
            <PokemonList data={data}></PokemonList>
          )}
          {isLoadin === false && filteredPokemon !== null && <PokemonList data={filteredPokemon}></PokemonList>}
        </div>
      </div>
    </>
  );
};

export default CaptureStructure;
