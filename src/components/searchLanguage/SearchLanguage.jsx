import SearchLanguageStyle from './SearchLanguage.module.css';
import SearchBar from '../searchBar/SearchBar';
import LanguageOptions from '../languageOptions/LanguageOptions';


const SearchLanguage = (props) => {
    return(
        <div className={SearchLanguageStyle.container}>
            <div className={SearchLanguageStyle.searchBar}>
                <SearchBar></SearchBar>
            </div>
            <div className={SearchLanguageStyle.languageOptions}>
                <LanguageOptions></LanguageOptions>
            </div>
            
        </div>
    );
};

export default SearchLanguage;