import NotFoundStructureStyle from './NotFoundStructure.module.css';
import OutHeader from '../outHeader/OutHeader';
import LogInstructions from '../logInstructions/LogInstructions';
import {LogInContainer} from '../logInContainer/LogInContainer';
import { Link } from 'react-router-dom';


const NotFoundStructure = (props) => {
    return(
        <>
        <div className={NotFoundStructureStyle.page}></div>
        <OutHeader></OutHeader>
        <div className={NotFoundStructureStyle.pokeball}>
            <div>
                <h1 className={NotFoundStructureStyle.errorCode}>404</h1>
                <h1 className={NotFoundStructureStyle.introMessage}>"You Can't Expect To Win Every Single Battle..."</h1>
                <h1 className={NotFoundStructureStyle.errorMessage}>Looks like we couldn't find the URL you asked for.</h1>
                <Link to="/" className={NotFoundStructureStyle.link}>
                    <div className={NotFoundStructureStyle.button}>
                    <h1 className={NotFoundStructureStyle.buttonText}>Back to Home</h1>
                    </div>
                </Link>
            </div>
        </div>
        </>
    );
};

export default NotFoundStructure;