import LogInContainerStyle from "./LogInContainer.module.css";
import LogInFields from "../logInFields/LogInFields";
import { Link, useNavigate } from "react-router-dom";
import buttonIcon from "../../assets/log.png";
import useFetchPost from "../../hooks/useFetchPost";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../appContext/AppContext";

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
  const { globalUser, setGlobalUser } = useContext(AppContext);

  useEffect(() => {
    if (hasError !== null) {
      setErrorStatus(data.message);
      console.warn("Este es el error ", data.message);
      return;
    }
    if (data?.id) {
      const nameObj = {
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
        role: data.role,
        connected: true
      };
      setGlobalUser(nameObj);
      setSubmitting(true);
    }
  }, [data]);

  const validateInfo = async () => {
    await postFetch("http://localhost:8080/pokedex/auth/logIn", user, "");
  };

  if (submitting) {
    navigate(`/home/en`);
  }

  return (
    <div className={LogInContainerStyle.container}>
      <h1 className={LogInContainerStyle.title}>Log In</h1>
      <h5 className={LogInContainerStyle.info}>
        Don't have an account yet? <Link to="/signUp">Sign Up</Link>
      </h5>
      <LogInFields newUser={gettingInfoForm}></LogInFields>
      <div className={LogInContainerStyle.recoverContainer}>
        <Link className={LogInContainerStyle.recoverLink} to="/recovery">Forgot Password</Link>
      </div>
      
      {errorStatus !== "" && (
        <h1 className={LogInContainerStyle.errorMessage}>{errorStatus}</h1>
      )}
      <button
        onClick={() => validateInfo()}
        className={LogInContainerStyle.button}
      >
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
