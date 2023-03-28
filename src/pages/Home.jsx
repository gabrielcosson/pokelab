import InHeader from "../components/inHeader/InHeader";
import HomeStructure from "../components/homeStructure/HomeStructure";
import useFetchGet from "../hooks/useFetchGet";
import { useEffect, useState } from "react";



const Home = ({ type = "fire" }) => {
  const { getFetch } = useFetchGet();
  const [pokemons, setPokemons] = useState("");
  const [url, setUrl] = useState({
    quantity: 0,
    resultes: [],
  });

  const { data, isLoadin, hasError } = useFetchGet(
    "http://localhost:8080/pokedex/pokemon?quantity=12&offset=0"
  );

  const {
    data: dataType,
    isLoadin: isLoadinType,
    hasError: hasErrorType,
  } = useFetchGet(`http://localhost:8080/pokedex/type?pokemonType=${type}`);

  console.log('data Type ' , {dataType});

  return (
    <>
      <InHeader></InHeader>
      <HomeStructure></HomeStructure>
    </>
  );
};

export default Home;