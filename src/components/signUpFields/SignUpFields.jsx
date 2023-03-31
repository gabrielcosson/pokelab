import { useState } from "react";
import SignUpFieldsStyle from "./SignUpFields.module.css";

const SignUpFields = ({ newUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [questionAnswer, setQuestionAnswer] = useState("");

  const onInputNameChange = ({ target }) => {
    newUser(target.value, "name");
    setName(target.value);
  };

  const onInputEmailChange = ({ target }) => {
    setEmail(target.value);
    newUser(target.value, "email");
  };

  const onInputUsernameChange = ({ target }) => {
    newUser(target.value, "username");
    setUsername(target.value);
  };

  const onInputPasswordChange = ({ target }) => {
    setPassword(target.value);
    newUser(target.value, "password");
  };
  
  const onInputConfirmPasswordChange = ({ target }) => {
    setConfirmPassword(target.value);
    newUser(target.value, "confirmPassword");
  };

  const onInputQuestionAnswerChange = ({ target }) => {
    setQuestionAnswer(target.value);
    newUser(target.value, "questionAnswer");
  };



  return (
    <form>
      <h6 className={SignUpFieldsStyle.title}>Full Name</h6>
      <div className={SignUpFieldsStyle.inputSpace}>
        <input
          type="text"
          placeholder="Write down your full name here"
          className={SignUpFieldsStyle.field}
          value={name}
          onChange={onInputNameChange}
        ></input>
      </div>

      <h6 className={SignUpFieldsStyle.title}>E-mail</h6>
      <div className={SignUpFieldsStyle.inputSpace}>
        <input
          type="text"
          placeholder="Write down your email address here"
          className={SignUpFieldsStyle.field}
          value={email}
          onChange={onInputEmailChange}
        ></input>
      </div>

      <h6 className={SignUpFieldsStyle.title}>Trainer Username</h6>
      <div className={SignUpFieldsStyle.inputSpace}>
        <input
          type="text"
          placeholder="Write a trainer username here"
          className={SignUpFieldsStyle.field}
          value={username}
          onChange={onInputUsernameChange}
        ></input>
      </div>

      <h6 className={SignUpFieldsStyle.title}>Password</h6>
      <div className={SignUpFieldsStyle.inputSpace}>
        <input
          type="password"
          placeholder="Write down your password here"
          className={SignUpFieldsStyle.field}
          value={password}
          onChange={onInputPasswordChange}
        ></input>
      </div>

      <h6 className={SignUpFieldsStyle.title}>Confirm Password</h6>
      <div className={SignUpFieldsStyle.inputSpace}>
        <input
          type="password"
          placeholder="Confirm your password here"
          className={SignUpFieldsStyle.field}
          value={confirmPassword}
          onChange={onInputConfirmPasswordChange}
        ></input>
      </div>

      <h6 className={SignUpFieldsStyle.title}>What is the name of your first pet?</h6>
      <div className={SignUpFieldsStyle.inputSpace}>
        <input
          type="text"
          placeholder="Answer the question here"
          className={SignUpFieldsStyle.field}
          value={questionAnswer}
          onChange={onInputQuestionAnswerChange}
        ></input>
      </div>
    </form>
  );
};

export default SignUpFields;
