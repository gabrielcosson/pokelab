import LogInContainerStyle from './LogInContainer.module.css';
import LogInFields from '../logInFields/LogInFields';
import { Link } from 'react-router-dom';
import buttonIcon from '../../assets/login.png';


const LogInContainer = (props) => {
    return(
        <div className={LogInContainerStyle.container}>
            <h1 className={LogInContainerStyle.title}>Log In</h1>
            <h5 className={LogInContainerStyle.info}>Doesn't have an account yet? <Link to='/signUp'>Sign Up</Link></h5>
            <LogInFields></LogInFields>
            <Link to= '/home'>
                <div className={LogInContainerStyle.button}>
                    <img alt="logIn.png" className={LogInContainerStyle.buttonIcon} src={buttonIcon}/>
                    <h1 className={LogInContainerStyle.buttonText}>LOG IN</h1>
                </div>
            </Link>
        </div>
    );
};

export default LogInContainer;