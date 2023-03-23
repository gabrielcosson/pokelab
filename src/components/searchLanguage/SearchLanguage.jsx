import SearchLanguageStyle from './SearchLanguage.module.css';
import SearchBar from '../searchBar/SearchBar';
import LanguageOptions from '../languageOptions/LanguageOptions';


const SearchLanguage = (props) => {
    return(
        <div className={SearchLanguageStyle.container}>
            <SearchBar></SearchBar>
            <LanguageOptions></LanguageOptions>
        </div>
    );
};

export default SearchLanguage;