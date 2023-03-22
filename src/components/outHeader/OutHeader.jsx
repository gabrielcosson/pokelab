import OutHeaderStyle from './OutHeader.module.css';
import logo from '../../assets/logo.png';



const OutHeader = (props) => {
    return(
        <div className={OutHeaderStyle.header}>
            <img className={OutHeaderStyle.logo} src={logo}></img>
        </div>
    );
};

export default OutHeader;