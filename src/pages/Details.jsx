import { Component } from 'react';
import DetailsStructure from '../components/detailsStructure/DetailsStructure';
import useFetchGet from "../hooks/useFetchGet";
import PropTypes from 'prop-types';
import Spinner from '../components/spinner/Spinner';
import InHeader from '../components/inHeader/InHeader';

const Details = ({pokemonName,language})=>{
    
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

Details.propTypes = {
    pokemonName: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired
}

Details.defaultProps = {
    pokemonName: 'charizard',
    language: 'en'
}

export default Details;