import { Component } from 'react';
import DetailsStructure from '../components/detailsStructure/DetailsStructure';
import useFetchGet from "../hooks/useFetchGet";
import PropTypes from 'prop-types';
const Details = ({pokemonName})=>{

    console.log(`esto es una prueba name ${pokemonName}`)
    const { data, isLoadin, hasError } = useFetchGet(
      `http://localhost:8080/pokedex/de/pokemon?value=${pokemonName}`
    );

    console.log('Esto trayendo info ' , data );
        return (
          <>
            <h1>Hola</h1>
          </>

          //    <DetailsStructure></DetailsStructure>
        );
    
}
Details.propTypes = {
    pokemonName: PropTypes.string.isRequired
}

Details.defaultProps = {
    pokemonName: 'pikachu'
}
export default Details;