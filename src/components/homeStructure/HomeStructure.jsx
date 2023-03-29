import HomeStructureStyle from "./HomeStructure.module.css";
import { Component, useContext, useEffect, useState } from "react";
import Spinner from "../../components/spinner/Spinner";
import PokemonList from "../../components/pokemonList/PokemonList";
import useFetchGet from "../../hooks/useFetchGet";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import SearchLanguage from "../searchLanguage/SearchLanguage";
import { useParams } from "react-router-dom";
import InHeader from "../../components/inHeader/InHeader";
import { BurgerMenuContext } from "../context/burgerMenuContext";

const HomeStructure = (props) => {
  const { language } = useParams();
  const [pageOffset, setPageOffset] = useState(0);
  const { widthBurgerMenu, widthList, globalUser } = useContext(BurgerMenuContext);
  
  const { data, isLoadin, hasError } = useFetchGet(
    `http://localhost:8080/pokedex/pokemon?quantity=12&offset=${pageOffset}&language=${language}`);

  return (
    <>
      <InHeader username={globalUser.username}></InHeader>
      <div className={HomeStructureStyle.complete}>
        <div className={HomeStructureStyle.burgerMenu} style={widthBurgerMenu}>
          <BurgerMenu language = {language} userName={globalUser.name} userRole={globalUser.role}></BurgerMenu>
        </div>
        <div className={HomeStructureStyle.pokemonList} style={widthList}>
          <SearchLanguage language= {language}></SearchLanguage>
          <div className={HomeStructureStyle.listHeader}>
            <div className={HomeStructureStyle.titleContainer}>
              <h1 className={HomeStructureStyle.title}>Pokedex</h1>
            </div>
            <div className={HomeStructureStyle.paginationContainer}>
              <button
                className={HomeStructureStyle.button}
                onClick={() => setPageOffset(pageOffset - 12)}
                disabled={pageOffset == 0 ? true : false}
              >
                Previous
              </button>
              <button
                className={HomeStructureStyle.button}
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

export default HomeStructure;
