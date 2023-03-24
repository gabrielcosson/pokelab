import LogInContainerStyle from "./LogInContainer.module.css";
import LogInFields from "../logInFields/LogInFields";
import { Link } from "react-router-dom";
import buttonIcon from "../../assets/login.png";
import useFetchPost  from "../../hooks/useFetchPost";
import { useState } from "react";

const LogInContainer = (props) => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const gettingInfoForm = (data, emailBool, passwordBool) => {
    if (emailBool) setUser({ ...user, email: data });
    if (passwordBool) setUser({ ...user, password: data });
  };

  const {getFetch} = useFetchPost();

  const validateInfo = () => {
    /* console.log(
      "ESTA ES LA INFO ",
      //getFetch("http://localhost:8080/pokedex/auth/logIn", user, "")
    ); */

    const statusPerson = getFetch("http://localhost:8080/pokedex/auth/logIn", user, "");
    console.log(statusPerson);
  };
    
  return(
        <div className={LogInContainerStyle.container}>
            <h1 className={LogInContainerStyle.title}>Log In</h1>
            <h5 className={LogInContainerStyle.info}>Doesn't have an account yet? <Link to='/signUp'>Sign Up</Link></h5>
            <LogInFields newUser={gettingInfoForm}></LogInFields>
            <button onClick={() => validateInfo()}>
              <div className={LogInContainerStyle.button}>
                <img alt="logIn.png" className={LogInContainerStyle.buttonIcon} src={buttonIcon}/>
                <h1 className={LogInContainerStyle.buttonText}>LOG IN</h1>
              </div>
            </button>
        </div>
    );
  };

export default LogInContainer;
