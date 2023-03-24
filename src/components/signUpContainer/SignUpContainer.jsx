import SignUpContainerStyle from "./SignUpContainer.module.css";
import SignUpFields from "../signUpFields/SignUpFields";
import { Link } from "react-router-dom";
import buttonIcon from "../../assets/signup.png";
import OutHeader from "../outHeader/OutHeader";
import { useState } from "react";

const SignUpContainer = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: ""
  });

  const gettingInfoForm = (data, type) => {
    if (type === 'email') setUser({ ...user, email: data });
    else if (type === 'password') setUser({ ...user, password: data });
    else if (type === 'name') setUser({ ...user, name: data });
    else if (type === 'username') setUser({ ...user, username: data });
    console.log({user})
  };

  return (
    <>
      <div className={SignUpContainerStyle.page}></div>
      <OutHeader></OutHeader>
      <div className={SignUpContainerStyle.container}>
        <h1 className={SignUpContainerStyle.title}>Sign Up</h1>
        <h5 className={SignUpContainerStyle.info}>
          Already have an account yet? <Link to="/logIn">Log In</Link>
        </h5>
        <SignUpFields newUser={gettingInfoForm}></SignUpFields>
        <div className={SignUpContainerStyle.button}>
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
