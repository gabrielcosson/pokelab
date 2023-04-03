import SearchLanguageCaptureStyle from './SearchLanguageCapture.module.css';
import SearchBar from '../searchBar/SearchBar';
import LanguageHome from '../languagesHome/LanguageHome';
import LanguageCapture from '../languageCapture/LanguageCapture';
import SearchBarCapture from '../searchBarCapture/SearchBarCapture';

const SearchLanguageCapture = (props) => {
    return (
      <div className={SearchLanguageCaptureStyle.container}>
        <div className={SearchLanguageCaptureStyle.searchBar}>
          <SearchBarCapture
            language={props.language}
            updateSearch={props.updateSearch}
          ></SearchBarCapture>
        </div>
        <div className={SearchLanguageCaptureStyle.languages}>
          <LanguageCapture></LanguageCapture>
        </div>
      </div>
    );
};

export default SearchLanguageCapture;