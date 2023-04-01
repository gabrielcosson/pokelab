import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import LanguageOptionsStyle from "./LanguageOptions.module.css";

const LanguageOptions = (props) => {
  const { pokemon } = useParams();

  /*const navigate = useNavigate();
  const { lan, pokemon, ...rest } = useParams();
  const onPath = () => {
    navigate(`/details/en/${props.pokemonName}`);
  };*/

  return (
    <div className={LanguageOptionsStyle.languages}>
      <Link to={`/details/en/${pokemon}`} state={{ from: props.from.slice(0,-2)+"en", page: props.pageConsistent }}>
        <div className={LanguageOptionsStyle.english}></div>
      </Link>
      <Link to={`/details/es/${pokemon}`} state={{ from: props.from.slice(0,-2)+"es", page: props.pageConsistent }}>
        <div className={LanguageOptionsStyle.spanish}></div>
      </Link>
      <Link to={`/details/de/${pokemon}`} state={{ from: props.from.slice(0,-2)+"de", page: props.pageConsistent }}>
        <div className={LanguageOptionsStyle.german}></div>
      </Link>
      <Link to={`/details/ja/${pokemon}`} state={{ from: props.from.slice(0,-2)+"ja", page: props.pageConsistent }}>
        <div className={LanguageOptionsStyle.japanese}></div>
      </Link>
    </div>
  );
};

export default LanguageOptions;
