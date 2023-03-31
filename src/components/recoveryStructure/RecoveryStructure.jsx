import RecoveryStructureStyle from './RecoveryStructure.module.css';
import OutHeader from '../outHeader/OutHeader';
import RecoveryContainer from '../recoveryContainer/RecoveryContainer';


const RecoveryStructure = (props) => {
    return(
        <>
        <div className={RecoveryStructureStyle.page}></div>
        <OutHeader></OutHeader>        
        <RecoveryContainer></RecoveryContainer>
        </>
    );
};

export default RecoveryStructure;