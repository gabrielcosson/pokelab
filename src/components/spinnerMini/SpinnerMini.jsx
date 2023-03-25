import SpinnerMiniStyle from "./SpinnerMini.module.css";

const SpinnerMini = () => {
    return (
        <>
            <div className={SpinnerMiniStyle.loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <h1 className={SpinnerMiniStyle.text}>Loading...</h1>
            </div>
            
        </>
    );
};

export default SpinnerMini;