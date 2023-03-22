import LogInContainerStyle from './LogInContainer.module.css';
import LogInFields from '../logInFields/LogInFields';
import { Link } from 'react-router-dom';
import image from '../../assets/tab-icon.png';
import buttonIcon from '../../assets/login.png';
import OutHeader from '../outHeader/OutHeader';


const LogInContainer = (props) => {
    return(
        <>
        <div className={LogInContainerStyle.page}></div>
        <OutHeader></OutHeader>
        <div className={LogInContainerStyle.instructionsContainer}>
            <img className={LogInContainerStyle.image} src={image} alt= 'pokeball'/>
            <h3 className={LogInContainerStyle.instructions}>Please enter your credentials to log in. If you do not have an account, please use the <span>Sign Up</span> button</h3>
        </div>
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
        </>
    );
};

export default LogInContainer;