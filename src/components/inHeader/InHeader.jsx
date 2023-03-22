import InHeaderStyle from './InHeader.module.css';
import hamburgerIcon from '../../assets/hamburger-menu.png'
import logo from '../../assets/logo.png'



const InHeader = (props) => {
    return(
        <div className={InHeaderStyle.header}>
            <div className={InHeaderStyle.menu}>
                <img className={InHeaderStyle.hamburger} src={hamburgerIcon}></img>
                <h1 className={InHeaderStyle.greet}>Welcome Gabriel!</h1>
            </div>
            <div className={InHeaderStyle.logoContainer}><img className={InHeaderStyle.logo} src={logo}></img></div>
            <div></div>
        </div>
    );
};

export default InHeader;