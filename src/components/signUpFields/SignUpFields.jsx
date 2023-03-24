import { useState } from 'react';
import SignUpFieldsStyle from './SignUpFields.module.css';

const SignUpFields = ({ newUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onInputNameChange = ({ target }) => {
        newUser(target.value, "name");
    setName(target.value);
  };

  const onInputPasswordChange = ({ target }) => {
    setPassword(target.value);
    if(password==confirmPassword){
        newUser(target.value, "password");
    }
  };
  const onInputConfirmPasswordChange = ({ target }) => {
    setConfirmPassword(target.value);
  };

  const onInputEmailChange = ({ target }) => {
    setEmail(target.value);
    newUser(target.value,'email');
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
                type='text'
                placeholder='Write a trainer username here'
                className={SignUpFieldsStyle.field}
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
    </form>
  );
};

export default SignUpFields;