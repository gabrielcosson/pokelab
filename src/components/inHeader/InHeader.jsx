import InHeaderStyle from "./InHeader.module.css";
import hamburgerIcon from "../../assets/hamburger-menu.png";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AppContext } from "../appContext/AppContext";

const InHeader = (props) => {
  const { display } = useContext(AppContext);

  return (
    <div className={InHeaderStyle.header}>
      <div className={InHeaderStyle.menu}>
        <img className={InHeaderStyle.hamburger} src={hamburgerIcon} onClick={display}></img>
        <h1 className={InHeaderStyle.greet}>Welcome <span className={InHeaderStyle.username}>{props.username}!</span></h1>
      </div>
      <div className={InHeaderStyle.logoContainer}>
        <img className={InHeaderStyle.logo} src={logo}></img>
      </div>
      <div></div>
    </div>
  );
};

export default InHeader;
