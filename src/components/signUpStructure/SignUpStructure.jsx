import SignUpStructureStyle from './SignUpStructure.module.css';
import OutHeader from '../outHeader/OutHeader';
import SignUpContainer from '../signUpContainer/SignUpContainer';


const SignUpStructure = (props) => {
    return(
        <>
        <div className={SignUpStructureStyle.page}></div>
        <OutHeader></OutHeader>        
        <SignUpContainer></SignUpContainer>
        </>
    );
};

export default SignUpStructure;