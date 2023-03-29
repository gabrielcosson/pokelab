import { useContext } from "react";
import { BurgerMenuContext } from "../context/burgerMenuContext";
import SpinnerStyle from "./Spinner.module.css";

const Spinner = () => {
    const { widthList } = useContext(BurgerMenuContext);

    return (
        <>
            <div className={SpinnerStyle.loader} style={widthList}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <h1 className={SpinnerStyle.text}>Loading...</h1>
            </div>
            
        </>
    );
};

export default Spinner;