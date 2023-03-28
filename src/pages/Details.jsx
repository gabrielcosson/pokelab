import { Component } from 'react';
import DetailsStructure from '../components/detailsStructure/DetailsStructure';
import useFetchGet from "../hooks/useFetchGet";
import PropTypes from 'prop-types';
import Spinner from '../components/spinner/Spinner';
import InHeader from '../components/inHeader/InHeader';

const Details = ()=>{

  const language = window.location.pathname.substring(9,11);
  const pokemonName = window.location.pathname.substring(11);

  const { data, isLoadin, hasError } = useFetchGet(
    `http://localhost:8080/pokedex/${language}/pokemon?value=${pokemonName}`
  );

  const {data: dataEvolution, isLoadin: isLoadinEvolution, hasError: hasErrorEvolution } = useFetchGet(
    `http://localhost:8080/pokedex/${language}/pokemon/evolution-chain?name=${pokemonName}`
  );
  return (
    <>
      <InHeader></InHeader>
      {isLoadin === true && isLoadinEvolution === true && <Spinner></Spinner>}
      {isLoadin === false && isLoadinEvolution === false && <DetailsStructure data = {data} dataEvolution = {dataEvolution}></DetailsStructure>}
    </>
  );
}

export default Details;