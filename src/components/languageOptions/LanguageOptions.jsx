import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import LanguageOptionsStyle from "./LanguageOptions.module.css";

const LanguageOptions = (props) => {
  const navigate = useNavigate();
  const { lan, pokemon, ...rest } = useParams();
  console.log();
  const onPath = () => {
    navigate(`/details/en/${props.pokemonName}`);
  };
  return (
    <div className={LanguageOptionsStyle.languages}>
      <Link to={`/details/en/${pokemon}`}>
        <div className={LanguageOptionsStyle.english}></div>
      </Link>
      <Link to={`/details/es/${pokemon}`}>
        <div className={LanguageOptionsStyle.spanish}></div>
      </Link>
      <Link to={`/details/ge/${pokemon}`}>
        <div className={LanguageOptionsStyle.german}></div>
      </Link>
      <Link to={`/details/ja/${pokemon}`}>
        <div className={LanguageOptionsStyle.japanese}></div>
      </Link>
    </div>
  );
};

export default LanguageOptions;
