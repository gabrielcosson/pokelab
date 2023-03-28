import LogInContainerStyle from "./LogInContainer.module.css";
import LogInFields from "../logInFields/LogInFields";
import { Link, useNavigate } from "react-router-dom";
import buttonIcon from "../../assets/log.png";
import useFetchPost from "../../hooks/useFetchPost";
import { useState } from "react";

export const LogInContainer = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [errorStatus, setErrorStatus] = useState("");


  const gettingInfoForm = (data, emailBool, passwordBool) => {
    if (emailBool) setUser({ ...user, email: data });
    if (passwordBool) setUser({ ...user, password: data });
  };


  const { postFetch, data, isLoading, hasError } = useFetchPost();
  const navigate = useNavigate();

  const validateInfo = async () => {
    setSubmitting(true);

    await postFetch("http://localhost:8080/pokedex/auth/logIn", user, "");

    setSubmitting(false);
    if (isLoading) {
      console.log("esta cargando");
    }
    if (hasError !== null || data === null) {
      console.warn("Este es el error ", hasError);
      setErrorStatus(hasError.response.data.message)
      return;
    }

    navigate(`/home/en`, {state:{data}});
  };

  return (
    <div className={LogInContainerStyle.container}>
      <h1 className={LogInContainerStyle.title}>Log In</h1>
      <h5 className={LogInContainerStyle.info}>
        Doesn't have an account yet? <Link to="/signUp">Sign Up</Link>
      </h5>
      <LogInFields newUser={gettingInfoForm}></LogInFields>
      <h1 className={LogInContainerStyle.errorMessage}>{errorStatus}</h1>
      <button onClick={() => validateInfo()} disabled={submitting} className={LogInContainerStyle.button}>
          <img
            alt="logIn.png"
            className={LogInContainerStyle.buttonIcon}
            src={buttonIcon}
          />
          <h1 className={LogInContainerStyle.buttonText}>LOG IN</h1>
      </button>
    </div>
  );
};
