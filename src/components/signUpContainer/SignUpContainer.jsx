import SignUpContainerStyle from "./SignUpContainer.module.css";
import SignUpFields from "../signUpFields/SignUpFields";
import { Link } from "react-router-dom";
import buttonIcon from "../../assets/signup.png";
import OutHeader from "../outHeader/OutHeader";
import { useEffect, useState } from "react";
import useFetchPost from "../../hooks/useFetchPost";
const SignUpContainer = (props) => {
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
      <div className={SignUpContainerStyle.page}></div>
      <div className={SignUpContainerStyle.container}>
        <h1 className={SignUpContainerStyle.title}>Sign Up</h1>
        <h5 className={SignUpContainerStyle.info}>
          Already have an account yet? <Link to="/logIn">Log In</Link>
        </h5>
        <SignUpFields newUser={gettingInfoForm}></SignUpFields>
        {errorStatus !== "" && (
          <h1 className={SignUpContainerStyle.errorMessage}>{errorStatus}</h1>
        )}
        {successFulStatus !== "" && (
          <h1 className={SignUpContainerStyle.succesfulMessage}>
            {successFulStatus}
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
