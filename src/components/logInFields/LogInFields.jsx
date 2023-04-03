import { useState } from "react";
import LogInFieldsStyle from "./LogInFields.module.css";

const LogInFields = ({ newUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onInputEmailChange = ({ target }) => {
    setEmail(target.value);
    newUser(target.value,true,false)
  };
  
  const onInputPasswordChange = ({ target }) => {
    setPassword(target.value);
    newUser(target.value, false, true);
  };

  return (
    <form>
      <h6 className={LogInFieldsStyle.title}>E-mail</h6>
      <div className={LogInFieldsStyle.inputSpace}>
        <input
          type="text"
          placeholder="Write down your email address"
          className={LogInFieldsStyle.field}
          value={email}
          onChange={onInputEmailChange}
        ></input>
      </div>

      <h6 className={LogInFieldsStyle.title}>Password</h6>
      <div className={LogInFieldsStyle.inputSpace}>
        <input
          type="password"
          placeholder="Write down your password"
          className={LogInFieldsStyle.field}
          value={password}
          onChange={onInputPasswordChange}
        ></input>
      </div>
    </form>
  );
};

export default LogInFields;
