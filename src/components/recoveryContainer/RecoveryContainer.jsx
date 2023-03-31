import RecoveryContainerStyle from "./RecoveryContainer.module.css";
import RecoveryFields from "../recoveryFields/RecoveryFields";
import { Link } from "react-router-dom";
import passwordRecoveryIcon from "../../assets/passwordRecoveryIcon.png";
import { useEffect, useState } from "react";
import useFetchPost from "../../hooks/useFetchPost";

const RecoveryContainer = (props) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
   const [errorStatus, setErrorStatus] = useState("");
   const [successFulStatus, setSuccessFulStatus] = useState("");

  const gettingInfoForm = (data, type) => {
    if (type === 'email') setUser({ ...user, email: data });
    else if (type === 'password') setUser({ ...user, password: data });
    else if (type === 'name') setUser({ ...user, name: data });
    else if (type === 'username') setUser({ ...user, username: data });
    else if (type === 'confirmPassword') setUser({ ...user, confirmPassword: data });
    
  };

   const { postFetch, data, isLoading, hasError } = useFetchPost();
    useEffect(() => {
      if(successFulStatus!==''){
        setSuccessFulStatus('')
      }
    if (hasError !== null) {
      setErrorStatus(data.message);
      console.warn("Este es el error ", hasError);
      return;
    }
    if (data?.id){
      if(errorStatus!==''){
        setErrorStatus('')
      }
      setSuccessFulStatus('Usuario creado correctamente');
    }
    }, [data])
    
    const validateInfo = async () => {
      if(user.password === user.confirmPassword){
        const validatedUser = {
          ...user
        }
        delete validatedUser.confirmPassword;
        await postFetch(
          "http://localhost:8080/pokedex/auth/signUp",
          validatedUser,
          ""
        );
      }else{
        setErrorStatus("Password missmatch");
      }
      
    };

  return (
    <>
      <div className={RecoveryContainerStyle.page}></div>
      <div className={RecoveryContainerStyle.container}>
        <h1 className={RecoveryContainerStyle.title}>Recovery</h1>
        <h5 className={RecoveryContainerStyle.info}>
          No need to change the password? <Link to="/logIn">Log In</Link>
        </h5>
        <RecoveryFields></RecoveryFields>
        {errorStatus !== "" && (
          <h1 className={RecoveryContainerStyle.errorMessage}>{errorStatus}</h1>
        )}
        {successFulStatus !== "" && (
          <h1 className={RecoveryContainerStyle.succesfulMessage}>
            {successFulStatus}
          </h1>
        )}
        <div
          onClick={() => validateInfo()}
          className={RecoveryContainerStyle.button}
        >
          <img
            alt="passwordRecovery.png"
            className={RecoveryContainerStyle.buttonIcon}
            src={passwordRecoveryIcon}
          />
          <h1 className={RecoveryContainerStyle.buttonText}>CHANGE ACCOUNT PASSWORD</h1>
        </div>
      </div>
    </>
  );
};

export default RecoveryContainer;
