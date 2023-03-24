import LogInstructionsStyle from './LogInstructions.module.css';
import image from '../../assets/pokeball.png';


const LogInstructions = (props) => {
    return(
        <div className={LogInstructionsStyle.instructionsContainer}>
            <img className={LogInstructionsStyle.image} src={image} alt= 'pokeball'/>
            <h3 className={LogInstructionsStyle.instructions}>Please enter your credentials to log in. If you do not have an account, please use the <span>Sign Up</span> button</h3>
        </div>
    );
};

export default LogInstructions;