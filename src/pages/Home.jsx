import { Component } from 'react';
import SearchLanguage from '../components/searchLanguage/SearchLanguage';
import InHeader from '../components/inHeader/InHeader';
import PokemonList from '../components/pokemonList/PokemonList';


class Home extends Component{
    render(){
        return(
            <>
                <InHeader></InHeader>
                <SearchLanguage></SearchLanguage>
                <PokemonList></PokemonList>               
            </>
        )
    }
}

export default Home;