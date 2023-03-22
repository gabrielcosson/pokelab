import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/outHeader/OutHeader';
import PokemonCard from '../components/pokemonCard/PokemonCard';
import SearchLanguage from '../components/searchLanguage/SearchLanguage';
import InHeader from '../components/inHeader/InHeader';
import Data from './data.json';


class Home extends Component{
    render(){
        return(
            <>
                <InHeader></InHeader>
                <SearchLanguage></SearchLanguage>
                {Object.values(Data).map(pokemon => 
                    <PokemonCard 
                        name = {pokemon.name} 
                        image = {pokemon.image}
                        types = {pokemon.types}
                        primaryColor = {pokemon.primaryColor}
                        secondaryColor = {pokemon.secondaryColor}
                    ></PokemonCard>
                    )}
            </>
        )
    }
}

export default Home;