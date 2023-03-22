import LogInFieldsStyle from './LogInFields.module.css';

const LogInFields = (props) => {
    return(
        <form>
            <h6 className={LogInFieldsStyle.title}>E-mail</h6>
            <div className={LogInFieldsStyle.inputSpace}>
                <input
                type='text'
                placeholder='Write down your email address'
                className={LogInFieldsStyle.field}
                ></input>
            </div>
            
            <h6 className={LogInFieldsStyle.title}>Password</h6>
            <div className={LogInFieldsStyle.inputSpace}>
                <input
                type='password'
                placeholder='Write down your password'
                className={LogInFieldsStyle.field}
                ></input>
            </div>
        </form>
    );
};

export default LogInFields;