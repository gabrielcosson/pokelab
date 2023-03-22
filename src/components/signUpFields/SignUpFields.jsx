import SignUpFieldsStyle from './SignUpFields.module.css';

const SignUpFields = (props) => {
    return(
        <form>
            <h6 className={SignUpFieldsStyle.title}>Full Name</h6>
            <div className={SignUpFieldsStyle.inputSpace}>
                <input
                type='text'
                placeholder='Write down your full name here'
                className={SignUpFieldsStyle.field}
                ></input>
            </div>
            
            <h6 className={SignUpFieldsStyle.title}>E-mail</h6>
            <div className={SignUpFieldsStyle.inputSpace}>
                <input
                type='text'
                placeholder='Write down your email address here'
                className={SignUpFieldsStyle.field}
                ></input>
            </div>
            
            <h6 className={SignUpFieldsStyle.title}>Password</h6>
            <div className={SignUpFieldsStyle.inputSpace}>
                <input
                type='password'
                placeholder='Write down your password here'
                className={SignUpFieldsStyle.field}
                ></input>
            </div>

            <h6 className={SignUpFieldsStyle.title}>Confirm Password</h6>
            <div className={SignUpFieldsStyle.inputSpace}>
                <input
                type='password'
                placeholder='Confirm your password here'
                className={SignUpFieldsStyle.field}
                ></input>
            </div>
        </form>
    );
};

export default SignUpFields;