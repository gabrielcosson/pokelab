import HomeStructureStyle from "./HomeStructure.module.css";
import { Component, useContext, useEffect, useState } from "react";
import Spinner from "../../components/spinner/Spinner";
import PokemonList from "../../components/pokemonList/PokemonList";
import useFetchGet from "../../hooks/useFetchGet";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import SearchLanguage from "../searchLanguage/SearchLanguage";
import { useLocation, useParams } from "react-router-dom";
import InHeader from "../../components/inHeader/InHeader";
import { AppContext } from "../appContext/AppContext";
import PaginationPokedex from "../paginationPokedex/PaginationPokedex";

const HomeStructure = (props) => {
  const { language } = useParams();
  const location = useLocation();
  const [pageOffset, setPageOffset] = useState(location.state != null ? (((Number(location.state.pageConsistent))-1)*12) : 0);
  const [page, setPage] = useState(location.state != null ? Number(location.state.pageConsistent) : 1);
  const { widthBurgerMenu, widthList, globalUser } = useContext(AppContext);
  const [foundPokemon, setFoundPokemon] = useState("");
  const [url, setURL] = useState(`http://localhost:8080/pokedex/pokemon?quantity=12&offset=${pageOffset}&language=${language}`);
  
  const onPageChange = ({ target }) => {
    setPage(target.value);
  };

  const changePage = (page)=>{
    let pageValue = Number(page);
    if(page<1){
      pageValue = 1;
    }else if(page>54){
      pageValue = 54;
    }
    setPage(pageValue)
    setPageOffset((pageValue-1)*12)
  }

  function updateSearch(pokemonName){
    setFoundPokemon(pokemonName)
  }

  useEffect(() => {
    if(foundPokemon==""){
      setURL(`http://localhost:8080/pokedex/pokemon?quantity=12&offset=${pageOffset}&language=${language}`)
    }else{
      setURL(`http://localhost:8080/pokedex/${language}/pokemon?value=${foundPokemon.toLowerCase()}`)
    }
  });
  
  const { data, isLoadin, hasError } = useFetchGet(url);
  return (
    <>
      <InHeader username={globalUser.username}></InHeader>
      <div className={HomeStructureStyle.complete}>
        <div className={HomeStructureStyle.burgerMenu} style={widthBurgerMenu}>
          <BurgerMenu
            language={language}
            userName={globalUser.name}
            userRole={globalUser.role}
          ></BurgerMenu>
        </div>
        <div className={HomeStructureStyle.pokemonList} style={widthList}>
          <SearchLanguage updateSearch = {updateSearch} language= {language}></SearchLanguage>
          <div className={HomeStructureStyle.listHeader}>
            <div className={HomeStructureStyle.titleContainer}>
              <h1 className={HomeStructureStyle.title}>Pokedex</h1>
            </div>
            <PaginationPokedex changePage={changePage} onPageChange={onPageChange} pageOffset={pageOffset} foundPokemon={foundPokemon} page={page}></PaginationPokedex>
          </div>
          {isLoadin === true && <Spinner></Spinner>}
          {isLoadin === false && <PokemonList page={page} data={data} ></PokemonList>}
        </div>
      </div>
    </>
  );
};

export default HomeStructure;
