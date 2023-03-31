import HomeStructureStyle from "./HomeStructure.module.css";
import { Component, useContext, useEffect, useState } from "react";
import Spinner from "../../components/spinner/Spinner";
import PokemonList from "../../components/pokemonList/PokemonList";
import useFetchGet from "../../hooks/useFetchGet";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import SearchLanguage from "../searchLanguage/SearchLanguage";
import { useParams } from "react-router-dom";
import InHeader from "../../components/inHeader/InHeader";
import { AppContext } from "../appContext/AppContext";
import { text } from "@fortawesome/fontawesome-svg-core";
import { number } from "prop-types";

const HomeStructure = (props) => {
  const { language } = useParams();
  const [pageOffset, setPageOffset] = useState(0);
  const { widthBurgerMenu, widthList, globalUser } = useContext(AppContext);
  const [foundPokemon, setFoundPokemon] = useState("")
  const [url, setURL] = useState(`http://localhost:8080/pokedex/${language}/pokemon?value=${foundPokemon.toLowerCase()}`)
  const [page, setPage] = useState(1);
  
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
            <div className={HomeStructureStyle.paginationContainer}>
              <button
                className={HomeStructureStyle.button}
                onClick={() => changePage(page-1)}
                disabled={pageOffset == 0 || foundPokemon !="" ? true : false}
              >
                Previous
              </button>
              <div className={HomeStructureStyle.pageFinder}>
                <input className={HomeStructureStyle.pageFinderInput} type="number" value={page} onChange={onPageChange}></input>
                <button className={HomeStructureStyle.pageFinderButton} onClick={()=>changePage(page)} disabled={foundPokemon !="" ? true : false}>Go</button>
              </div>
              
              <button
                className={HomeStructureStyle.button}
                onClick={() => changePage(page+1)}
                disabled={pageOffset == 636 || foundPokemon !="" ? true : false}
              >
                Next
              </button>
            </div>
          </div>
          {isLoadin === true && <Spinner></Spinner>}
          {isLoadin === false && <PokemonList data={data} ></PokemonList>}
        </div>
      </div>
    </>
  );
};

export default HomeStructure;
