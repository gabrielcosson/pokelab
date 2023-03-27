import PokemonListStyle from './PokemonList.module.css';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import Pagination from '../pagination/Pagination';
import { Link } from 'react-router-dom';


const PokemonList = (props) => {
    return(
        <>
            <div className={PokemonListStyle.listHeader}>
                <div className={PokemonListStyle.titleContainer}>
                    <h1 className={PokemonListStyle.title}>Pokedex</h1>
                </div>

            </div>
            <div className={PokemonListStyle.container}>
                {Object.values(props.data.results).map(pokemon => 
                    <PokemonCard 
                        key = {pokemon.id}
                        name = {pokemon.name} 
                        image = {pokemon.img_path}
                        mainType = {pokemon.types[0]}
                        types = {pokemon.types}
                    ></PokemonCard>)}
            </div>
        </>
    );
};

export default PokemonList;