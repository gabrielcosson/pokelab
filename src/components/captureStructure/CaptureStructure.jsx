import CaptureStructureStyle from "./CaptureStructure.module.css";
import { Component, useContext, useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import PokemonList from "../pokemonList/PokemonList";
import BurgerMenu from "../burgerMenu/BurgerMenu";
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
  const [quantity, setQuantity] = useState(12);
  const { data, isLoadin, hasError } = useFetchGetHeaders(`http://localhost:8080/pokedex/pokemon-trainer/${globalUser.username}/pokemon?quantity=${quantity}&offset=${pageOffset}&language=${language}`);
  const [finalData, setFinalData] = useState(data);

  function updateSearch(pokemonName) {
    if(pokemonName !==''){
      setFoundPokemon(pokemonName);
    }else{
      setFoundPokemon("");
    }
  }

  useEffect(() => {
    if (data != null) {
      const pokemonExist = data.results.filter(
        (pokemon) => pokemon.nickname.toLowerCase().includes(foundPokemon.toLowerCase()) || pokemon.name.toLowerCase().includes(foundPokemon.toLowerCase())
      );
      const dataReplic = {...data, results:pokemonExist}
      setFinalData(dataReplic);
      
      if (data.results.length < 12) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }      
    }
  }, [data]);

  useEffect(() => {
    if (foundPokemon !== "") {
      setQuantity(50);
    } else {
      setQuantity(12);
    }
  }, [foundPokemon]);

  
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
          {isLoadin === false && finalData !== null && <PokemonList data={finalData}></PokemonList>}
        </div>
      </div>
    </>
  );
};

export default CaptureStructure;
