import { Component, useEffect, useState } from "react";
import SearchLanguage from "../components/searchLanguage/SearchLanguage";
import InHeader from "../components/inHeader/InHeader";
import PokemonList from "../components/pokemonList/PokemonList";
import useFetchGet from "../hooks/useFetchGet";

import React from "react";

const Home = () => {
  const { getFetch } = useFetchGet();
  const [pokemons, setPokemons] = useState("");
  const [url, setUrl] = useState({
    quantity: 0,
    resultes: [],
  });
  const { data, isLoadin, hasError } = useFetchGet(
    "http://localhost:8080/pokedex/pokemon?quantity=12&offset=90"
  );
  if (!isLoadin) {
    console.log(data);
  }

  return (
    <>
      <InHeader></InHeader>
      <SearchLanguage></SearchLanguage>
      {(isLoadin) === false && <PokemonList data = {data}></PokemonList>}      
    </>
  );
};

export default Home;
