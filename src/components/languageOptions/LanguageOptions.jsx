import LanguageOptionsStyle from './LanguageOptions.module.css';

const LanguageOptions = (props) => {
    return(
        <div className={LanguageOptionsStyle.languages}>
            <div className={LanguageOptionsStyle.english}></div>
            <div className={LanguageOptionsStyle.spanish}></div>
            <div className={LanguageOptionsStyle.german}></div>
            <div className={LanguageOptionsStyle.japanese}></div>
        </div>
    );
};

export default LanguageOptions;