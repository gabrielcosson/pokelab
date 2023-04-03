import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import LanguageHomeStyle from "./LanguageHome.module.css";

const LanguageHome = (props) => {
  const navigate = useNavigate();
  const { lan, pokemon, ...rest } = useParams();
  const onPath = () => {
    navigate(`/details/en/${props.pokemonName}`);
  };
  return (
    <div className={LanguageHomeStyle.languages}>
      <Link to={`/home/en`}>
        <div className={LanguageHomeStyle.english}></div>
      </Link>
      <Link to={`/home/es`}>
        <div className={LanguageHomeStyle.spanish}></div>
      </Link>
      <Link to={`/home/de`}>
        <div className={LanguageHomeStyle.german}></div>
      </Link>
      <Link to={`/home/ja`}>
        <div className={LanguageHomeStyle.japanese}></div>
      </Link>
    </div>
  );
};

export default LanguageHome;
