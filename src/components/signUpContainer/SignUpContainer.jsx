import SignUpContainerStyle from "./SignUpContainer.module.css";
import SignUpFields from "../signUpFields/SignUpFields";
import { Link } from "react-router-dom";
import buttonIcon from "../../assets/signup.png";
import { useEffect, useState } from "react";
import useFetchPost from "../../hooks/useFetchPost";

const SignUpContainer = (props) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    questionAnswer: '',
  });

  const [errorStatus, setErrorStatus] = useState("");
  const [successfulStatus, setSuccessfulStatus] = useState("");

  const gettingInfoForm = (data, type) => {
    if (type === 'email') setUser({ ...user, email: data });
    else if (type === 'password') setUser({ ...user, password: data });
    else if (type === 'name') setUser({ ...user, name: data });
    else if (type === 'username') setUser({ ...user, username: data });
    else if (type === 'confirmPassword') setUser({ ...user, confirmPassword: data });
    else if (type === 'questionAnswer') setUser({ ...user, questionAnswer: data });
  };

   const { postFetch, data, isLoading, hasError } = useFetchPost();
    useEffect(() => {
      if(successfulStatus!==''){
        setSuccessfulStatus('')
      }
      if (hasError !== null) {
        setErrorStatus(data.message);
        return;
      }
      if (data?.id){
        if(errorStatus!==''){
          setErrorStatus('')
        }
        setSuccessfulStatus('Pokemon Trainer successfully created');
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
        setErrorStatus("The provided passwords do not match. Please verify");
      }
      
    };

  return (
    <>
      <div className={SignUpContainerStyle.page}></div>
      <div className={SignUpContainerStyle.container}>
        <h1 className={SignUpContainerStyle.title}>Sign Up</h1>
        <h5 className={SignUpContainerStyle.info}>
          Already have an account? <Link to="/logIn">Log In</Link>
        </h5>
        <SignUpFields newUser={gettingInfoForm}></SignUpFields>
        {errorStatus !== "" && (
          <h1 className={SignUpContainerStyle.errorMessage}>{errorStatus}</h1>
        )}
        {successfulStatus !== "" && (
          <h1 className={SignUpContainerStyle.succesfulMessage}>
            {successfulStatus}
          </h1>
        )}
        <div
          onClick={() => validateInfo()}
          className={SignUpContainerStyle.button}
        >
          <img
            alt="signUp.png"
            className={SignUpContainerStyle.buttonIcon}
            src={buttonIcon}
          />
          <h1 className={SignUpContainerStyle.buttonText}>CREATE ACCOUNT</h1>
        </div>
      </div>
    </>
  );
};

export default SignUpContainer;
