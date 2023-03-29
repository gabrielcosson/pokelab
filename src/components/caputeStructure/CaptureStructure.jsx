import CaptureStructureStyle from "./CaptureStructure.module.css";
import { Component, useContext, useEffect, useState } from "react";
import Spinner from "../../components/spinner/Spinner";
import PokemonList from "../../components/pokemonList/PokemonList";
import useFetchGet from "../../hooks/useFetchGet";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import SearchLanguage from "../searchLanguage/SearchLanguage";
import { useParams } from "react-router-dom";
import InHeader from "../../components/inHeader/InHeader";
import { BurgerMenuContext } from "../context/burgerMenuContext";

export const CaptureStructure = (props) => {
  const { language } = useParams();

  console.log(props);

  const [pokemons, setPokemons] = useState("");
  const [url, setUrl] = useState({ quantity: 0, resultes: [] });
  const [pageOffset, setPageOffset] = useState(0);

  const { data, isLoadin, hasError } = useFetchGet(
    `http://localhost:8080/pokedex/pokemon?quantity=12&offset=${pageOffset}&language=${language}`
  );

  const { widthBurgerMenu, widthList } = useContext(BurgerMenuContext);

  return (
    <>
      <InHeader username="gabrielnieves"></InHeader>
      <div className={CaptureStructureStyle.complete}>
        <div
          className={CaptureStructureStyle.burgerMenu}
          style={widthBurgerMenu}
        >
          <BurgerMenu userName="Gabriel" userRole="TRAINER"></BurgerMenu>
        </div>
        <div className={CaptureStructureStyle.pokemonList} style={widthList}>
          <SearchLanguage></SearchLanguage>
          <div className={CaptureStructureStyle.listHeader}>
            <div className={CaptureStructureStyle.titleContainer}>
              <h1 className={CaptureStructureStyle.title}>Captures</h1>
            </div>
            <div className={CaptureStructureStyle.paginationContainer}>
              <button
                className={CaptureStructureStyle.button}
                onClick={() => setPageOffset(pageOffset - 12)}
                disabled={pageOffset == 0 ? true : false}
              >
                Previous
              </button>
              <button
                className={CaptureStructureStyle.button}
                onClick={() => setPageOffset(pageOffset + 12)}
                disabled={pageOffset == 636 ? true : false}
              >
                Next
              </button>
            </div>
          </div>
          {isLoadin === true && <Spinner></Spinner>}
          {isLoadin === false && <PokemonList data={data}></PokemonList>}
        </div>
      </div>
    </>
  );
};
