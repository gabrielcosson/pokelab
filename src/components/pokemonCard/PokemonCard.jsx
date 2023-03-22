import TypeCard from '../typeCard/TypeCard.jsx';
import PokemonCardStyle from './PokemonCard.module.css';

const PokemonCard = (props) => {
    return(
        <div className={PokemonCardStyle.container} style={{background: "linear-gradient(to left,"+props.primaryColor+", "+props.secondaryColor+")"}}>
            <h1 className={PokemonCardStyle.name}>{props.name}</h1>
            <img className = {PokemonCardStyle.image} src={props.image}/>
            <div className={PokemonCardStyle.typeContainer}>
            {(props.types).map(type => <TypeCard type={type}></TypeCard>)}
            </div>
        </div>
    );
};

export default PokemonCard;