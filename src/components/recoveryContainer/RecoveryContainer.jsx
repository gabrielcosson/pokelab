import RecoveryContainerStyle from "./RecoveryContainer.module.css";
import RecoveryFields from "../recoveryFields/RecoveryFields";
import { Link } from "react-router-dom";
import passwordRecoveryIcon from "../../assets/passwordRecoveryIcon.png";
import { useEffect, useState } from "react";
import useFetchPost from "../../hooks/useFetchPost";

const RecoveryContainer = (props) => {
  const [user, setUser] = useState({
    email: "",
    question_answer: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errorStatus, setErrorStatus] = useState("");
  const [successfulStatus, setSuccessfulStatus] = useState("");

  const gettingInfoForm = (data, type) => {
    if (type === "email") setUser({ ...user, email: data });
    else if (type === "questionAnswer")
      setUser({ ...user, question_answer: data });
    else if (type === "password") setUser({ ...user, newPassword: data });
    else if (type === "confirmPassword")
      setUser({ ...user, confirmPassword: data });
  };

  const { postFetch, data, isLoading, hasError } = useFetchPost();
  useEffect(() => {
    if (successfulStatus !== "") {
      setSuccessfulStatus("");
    }
    if (hasError !== null) {
      setErrorStatus(data.message);
      return;
    }
    if (data?.message) {
      setSuccessfulStatus("The password has changed successfully");
      setErrorStatus("");
    }
  }, [data]);

  const validateInfo = async () => {
    if (user.newPassword === user.confirmPassword) {
      const validatedUser = { ...user };
      await postFetch(
        "http://localhost:8080/pokedex/auth/forgotPassword",
        validatedUser,
        ""
      );
    } else {
      setErrorStatus("The provided passwords do not match. Please verify.");
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
        <RecoveryFields changingPassword={gettingInfoForm}></RecoveryFields>
        {errorStatus !== "" && (
          <h1 className={RecoveryContainerStyle.errorMessage}>{errorStatus}</h1>
        )}
        {successfulStatus !== "" && (
          <h1 className={RecoveryContainerStyle.succesfulMessage}>
            {successfulStatus}
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
          <h1 className={RecoveryContainerStyle.buttonText}>
            CHANGE ACCOUNT PASSWORD
          </h1>
        </div>
      </div>
    </>
  );
};

export default RecoveryContainer;
