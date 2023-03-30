import SearchLanguageCaptureStyle from './SearchLanguageCapture.module.css';
import SearchBar from '../searchBar/SearchBar';
import LanguageHome from '../languagesHome/LanguageHome';
import LanguageCapture from '../languageCapture/LanguageCapture';

const SearchLanguageCapture = (props) => {
    return (
      <div className={SearchLanguageCaptureStyle.container}>
        <div className={SearchLanguageCaptureStyle.searchBar}>
          <SearchBar language={props.language}></SearchBar>
        </div>
        <div className={SearchLanguageCaptureStyle.languages}>
          <LanguageCapture></LanguageCapture>
        </div>
      </div>
    );
};

export default SearchLanguageCapture;