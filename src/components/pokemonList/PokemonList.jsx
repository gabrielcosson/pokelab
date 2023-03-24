import PokemonListStyle from './PokemonList.module.css';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import Data from '../../pages/data.json';



const PokemonList = (props) => {
    return(
        <>
            <h1 className={PokemonListStyle.title}> Pokedex</h1>
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