import SearchLanguageStyle from './SearchLanguage.module.css';
import searchIcon from '../../assets/search.png'
import englishFlag from '../../assets/en.png'
import spanishFlag from '../../assets/es.jpg'
import germanFlag from '../../assets/de.png'
import japaneseFlag from '../../assets/ja.png'




const SearchLanguage = (props) => {
    return(
        <div className={SearchLanguageStyle.container}>
            <div className={SearchLanguageStyle.searchBar}>
                <form action="" className={SearchLanguageStyle.searchForm}>
                    <input type= "text" placeholder='Search...'></input>
                    <button type = "submit"><img src={searchIcon}></img></button>
                </form>
            </div>
            <div className={SearchLanguageStyle.languages}>
                <div className={SearchLanguageStyle.english}></div>
                <div className={SearchLanguageStyle.spanish}></div>
                <div className={SearchLanguageStyle.german}></div>
                <div className={SearchLanguageStyle.japanese}></div>
            </div>
        </div>
    );
};

export default SearchLanguage;