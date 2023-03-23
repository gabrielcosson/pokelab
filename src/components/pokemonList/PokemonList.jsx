import PokemonListStyle from './PokemonList.module.css';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import Data from '../../../data.json';
import Pagination from '../pagination/Pagination';


const PokemonList = (props) => {
    return(
        <>
            <div className={PokemonListStyle.listHeader}>
                <div className={PokemonListStyle.titleContainer}>
                    <h1 className={PokemonListStyle.title}> Pokedex</h1>
                </div>
                <div className={PokemonListStyle.paginationContainer}>
                    <Pagination></Pagination>
                </div>
            </div>
            <div className={PokemonListStyle.container}>
                {Object.values(Data).map(pokemon => 
                    <PokemonCard 
                        name = {pokemon.name} 
                        image = {pokemon.image}
                        types = {pokemon.types}
                        primaryColor = {pokemon.primaryColor}
                        secondaryColor = {pokemon.secondaryColor}
                    ></PokemonCard>)}
            </div>
        </>
    );
};

export default PokemonList;