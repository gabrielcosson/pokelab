import { Component, useEffect, useState } from "react";
import SearchPagination from "../components/searchPagination/SearchPagination";
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
 
  const { data, isLoadin, hasError } = useFetchGet(
    "http://localhost:8080/pokedex/pokemon?quantity=12&offset=0"
  );

  return (
    <>
      <InHeader></InHeader>
      <SearchPagination></SearchPagination>
      {isLoadin === true && <Spinner></Spinner>}
      {isLoadin === false && <PokemonList data={data}></PokemonList>}
    </>
  );
};

export default Home;
