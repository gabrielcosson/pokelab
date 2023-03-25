import SpinnerStyle from "./Spinner.module.css";

const Spinner = () => {
    return (
        <>
            <div className={SpinnerStyle.loader}>
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