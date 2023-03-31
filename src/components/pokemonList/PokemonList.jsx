import PokemonListStyle from './PokemonList.module.css';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import Pagination from '../paginationPokedex/PaginationPokedex';

const PokemonList = (props) => {
    return(
        <div className={PokemonListStyle.container}>
            {Object.values(props.data.results).map((pokemon,index) => 
                <PokemonCard 
                    key={index}
                    name = {pokemon.name} 
                    image = {pokemon.img_path}
                    nickname = {pokemon.nickname}
                    mainType = {pokemon.types[0]}
                    types = {pokemon.types}
                    typesInLanguage = {pokemon.typesInLanguage}
                    page = {props.page}
                ></PokemonCard>)}
        </div>
    );
};

export default PokemonList;