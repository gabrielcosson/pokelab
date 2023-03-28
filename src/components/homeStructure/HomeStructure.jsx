import HomeStructureStyle from "./HomeStructure.module.css";
import { Component, useContext, useEffect, useState } from "react";
import Spinner from "../../components/spinner/Spinner";
import PokemonList from "../../components/pokemonList/PokemonList";
import useFetchGet from "../../hooks/useFetchGet";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import SearchLanguage from "../searchLanguage/SearchLanguage";
import { useParams } from "react-router-dom";
import BurgerMenuProvider from "../context/BurgerMenuProvider";
import InHeader from "../../components/inHeader/InHeader";
import { BurgerMenuContext } from "../context/burgerMenuContext";

const HomeStructure = (props) => {
  const { language } = useParams();
  const [pokemons, setPokemons] = useState("");
  const [url, setUrl] = useState({ quantity: 0, resultes: [] });

  const { data, isLoadin, hasError } = useFetchGet(
    `http://localhost:8080/pokedex/pokemon?quantity=12&offset=89&language=${language}`
  );
  const { widthBurgerMenu, widthList } = useContext(BurgerMenuContext);
  return (
    <>
      <InHeader></InHeader>
      <div className={HomeStructureStyle.complete}>
        <div className={HomeStructureStyle.burgerMenu} style={widthBurgerMenu}>
          <BurgerMenu></BurgerMenu>
        </div>
        <div className={HomeStructureStyle.pokemonList} style={widthList}>
          <SearchLanguage></SearchLanguage>
          {isLoadin === true && <Spinner></Spinner>}
          {isLoadin === false && (
            <PokemonList data={data}></PokemonList>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeStructure;
