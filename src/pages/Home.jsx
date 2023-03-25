import { Component, useEffect, useState } from "react";
import SearchLanguage from "../components/searchLanguage/SearchLanguage";
import InHeader from "../components/inHeader/InHeader";
import PokemonList from "../components/pokemonList/PokemonList";
import useFetchGet from "../hooks/useFetchGet";
import Spinner from "../components/spinner/Spinner";

const Home = () => {
  const { getFetch } = useFetchGet();
  const [pokemons, setPokemons] = useState("");
  const [url, setUrl] = useState({
    quantity: 0,
    resultes: [],
  });
  
  const { data, isLoadin, hasError } = useFetchGet("http://localhost:8080/pokedex/pokemon?quantity=50&offset=100");

  return (
    <>
      <InHeader></InHeader>
      <SearchLanguage></SearchLanguage>
      {(isLoadin) === true && <Spinner></Spinner>} 
      {(isLoadin) === false && <PokemonList data = {data}></PokemonList>} 
    </>
  );
};

export default Home;