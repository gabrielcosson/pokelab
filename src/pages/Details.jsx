import { Component } from 'react';
import DetailsStructure from '../components/detailsStructure/DetailsStructure';
import useFetchGet from "../hooks/useFetchGet";
import PropTypes from 'prop-types';
const Details = ({pokemonName,language})=>{
    const { data, isLoadin, hasError } = useFetchGet(
      `http://localhost:8080/pokedex/${language}/pokemon?value=${pokemonName}`
    );

     const {
       data: dataEvolution,
       isLoadin: isLoadinEvolution,
       hasError: hasErrorEvolution,
     } = useFetchGet(
       `http://localhost:8080/pokedex/${language}/pokemon/evolution-chain?name=${pokemonName}`
     );
     
    if (isLoadin === false && isLoadinEvolution == false) {
      console.log("Esto trayendo info ", data);
      console.log("Esto trayendo evolution ", dataEvolution);
    } 
    
        return (
          <>
            <h1>Hola</h1>
          </>

          //    <DetailsStructure></DetailsStructure>
        );
    
}
Details.propTypes = {
    pokemonName: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired
}

Details.defaultProps = {
    pokemonName: 'pikachu',
    language: 'en'
}
export default Details;