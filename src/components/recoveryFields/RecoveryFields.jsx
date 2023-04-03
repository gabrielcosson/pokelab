import { useState } from "react";
import RecoveryFieldsStyle from "./RecoveryFields.module.css";

const RecoveryFields = ({ changingPassword }) => {
  const [email, setEmail] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onInputEmailChange = ({ target }) => {
    setEmail(target.value);
    changingPassword(target.value, "email");
  };

  const onInputQuestionChange = ({ target }) => {
    setSecurityQuestion(target.value);
    changingPassword(target.value, "questionAnswer");
  };

  const onInputPasswordChange = ({ target }) => {
    setPassword(target.value);
    changingPassword(target.value, "password");
  };
  const onInputConfirmPasswordChange = ({ target }) => {
    setConfirmPassword(target.value);
    changingPassword(target.value, "confirmPassword");
  };

  return (
    <form>
      <h6 className={RecoveryFieldsStyle.title}>E-mail</h6>
      <div className={RecoveryFieldsStyle.inputSpace}>
        <input
          type="text"
          placeholder="Write down your email address here"
          className={RecoveryFieldsStyle.field}
          value={email}
          onChange={onInputEmailChange}
        ></input>
      </div>

      <h6 className={RecoveryFieldsStyle.title}>
        What is the name of your first pet?
      </h6>
      <div className={RecoveryFieldsStyle.inputSpace}>
        <input
          type="text"
          placeholder="Write the answer to the security question here"
          className={RecoveryFieldsStyle.field}
          value={securityQuestion}
          onChange={onInputQuestionChange}
        ></input>
      </div>

      <h6 className={RecoveryFieldsStyle.title}>New Password</h6>
      <div className={RecoveryFieldsStyle.inputSpace}>
        <input
          type="password"
          placeholder="Write down the new password here"
          className={RecoveryFieldsStyle.field}
          value={password}
          onChange={onInputPasswordChange}
        ></input>
      </div>

      <h6 className={RecoveryFieldsStyle.title}>Confirm New Password</h6>
      <div className={RecoveryFieldsStyle.inputSpace}>
        <input
          type="password"
          placeholder="Confirm your new password here"
          className={RecoveryFieldsStyle.field}
          value={confirmPassword}
          onChange={onInputConfirmPasswordChange}
        ></input>
      </div>
    </form>
  );
};

export default RecoveryFields;
