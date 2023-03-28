import HomeStructureStyle from './HomeStructure.module.css';
import { Component, useEffect, useState } from "react";
import Spinner from "../../components/spinner/Spinner";
import PokemonList from "../../components/pokemonList/PokemonList";
import useFetchGet from "../../hooks/useFetchGet";
import BurgerMenu from '../burgerMenu/BurgerMenu';
import SearchLanguage from '../searchLanguage/SearchLanguage';
import { useParams } from 'react-router-dom';
import BurgerMenuProvider from '../context/BurgerMenuProvider';
import InHeader from "../../components/inHeader/InHeader";


const HomeStructure = (props) => {
    console.log(props.userInfo)
    const {language} = useParams();
    
    const { getFetch } = useFetchGet();
    const [pokemons, setPokemons] = useState("");
    const [url, setUrl] = useState({quantity: 0, resultes: []});
    
    const [widthBurgerMenu, setWidthBurgerMenu] = useState({width: `20%`});
    const [widthList, setWidthList] = useState({width: `80%`});


    const { data, isLoadin, hasError } = useFetchGet(`http://localhost:8080/pokedex/pokemon?quantity=12&offset=89&language=${language}`);

    return(
        <>
        <BurgerMenuProvider widthBurgerMenu={20} widthList={100}>
            <InHeader username = {props.userInfo.username}></InHeader>
            <div className={HomeStructureStyle.complete}>
                <div className={HomeStructureStyle.burgerMenu} style={widthBurgerMenu}>
                    <BurgerMenu userName = {props.userInfo.name} userRole = {props.userInfo.role}></BurgerMenu>
                </div>
                <div className={HomeStructureStyle.pokemonList} style={widthList}>
                    <SearchLanguage></SearchLanguage>
                    {isLoadin === true && <Spinner></Spinner>}
                    {isLoadin === false && <PokemonList data={data}></PokemonList>}
                </div>
            </div>
        </BurgerMenuProvider>
      </>
    );
};

export default HomeStructure;