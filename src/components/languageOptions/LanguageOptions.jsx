import { Link } from 'react-router-dom';
import LanguageOptionsStyle from './LanguageOptions.module.css';

const LanguageOptions = (props) => {
    return(
        <div className={LanguageOptionsStyle.languages}>
            <Link to = {"/details/en/"+props.pokemonName}><div className={LanguageOptionsStyle.english}></div></Link>
            <Link to = {"/details/es/"+props.pokemonName}><div className={LanguageOptionsStyle.spanish}></div></Link>
            <Link to = {"/details/ge/"+props.pokemonName}><div className={LanguageOptionsStyle.german}></div></Link>
            <Link to = {"/details/ja/"+props.pokemonName}><div className={LanguageOptionsStyle.japanese}></div></Link>
        </div>
    );
};

export default LanguageOptions;