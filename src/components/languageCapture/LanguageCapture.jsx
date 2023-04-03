import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import LanguageCaptureStyle from "./LanguageCapture.module.css";

const LanguageCapture = (props) => {
  const navigate = useNavigate();
  const { lan, pokemon, ...rest } = useParams();

  return (
    <div className={LanguageCaptureStyle.languages}>
      <Link to={`/captures/en`}>
        <div className={LanguageCaptureStyle.english}></div>
      </Link>
      <Link to={`/captures/es`}>
        <div className={LanguageCaptureStyle.spanish}></div>
      </Link>
      <Link to={`/captures/de`}>
        <div className={LanguageCaptureStyle.german}></div>
      </Link>
      <Link to={`/captures/ja`}>
        <div className={LanguageCaptureStyle.japanese}></div>
      </Link>
    </div>
  );
};

export default LanguageCapture;
