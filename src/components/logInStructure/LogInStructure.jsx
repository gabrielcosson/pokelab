import LogInStructureStyle from './LogInStructure.module.css';
import OutHeader from '../outHeader/OutHeader';
import LogInstructions from '../logInstructions/LogInstructions';
import LogInContainer from '../logInContainer/logInContainer';


const LogInStructure = (props) => {
    return(
        <>
        <div className={LogInStructureStyle.page}></div>
        <OutHeader></OutHeader>
        <LogInstructions></LogInstructions>
        <LogInContainer></LogInContainer>
        </>
    );
};

export default LogInStructure;