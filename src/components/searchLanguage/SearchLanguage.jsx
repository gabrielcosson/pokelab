import SearchLanguageStyle from './SearchLanguage.module.css';
import SearchBar from '../searchBar/SearchBar';
import LanguageHome from '../languagesHome/LanguageHome';

const SearchLanguage = (props) => {
    return(
        <div className={SearchLanguageStyle.container}>
            <div className={SearchLanguageStyle.searchBar}>
                <SearchBar></SearchBar>
            </div>
            <div className={SearchLanguageStyle.languages}>
                <LanguageHome></LanguageHome>
            </div>
        </div>
    );
};

export default SearchLanguage;