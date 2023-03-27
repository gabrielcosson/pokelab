import TypeCard from '../typeCard/TypeCard.jsx';
import PokemonCardStyle from './PokemonCard.module.css';
import Types from '../../../types.json';
import { Link } from 'react-router-dom';

const PokemonCard = (props) => {
    return(
        <Link to={"/details/en/"+props.name}>
            <div className={PokemonCardStyle.container} style={{background: "linear-gradient(to right,"+Types[props.mainType].primaryColor+", "+Types[props.mainType].secondaryColor+")"}}>
                <h1 className={PokemonCardStyle.name}>{props.name.charAt(0).toUpperCase()+props.name.substr(1,12).toLowerCase()}</h1>
                <img className = {PokemonCardStyle.image} src={props.image}/>
                <div className={PokemonCardStyle.typeContainer}>
                {(props.types).map(type => <TypeCard key = {type} type={type}></TypeCard>)}
                </div>
            </div>
        </Link>
        
    );
};

export default PokemonCard;