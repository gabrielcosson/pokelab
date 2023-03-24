import SearchBarStyle from './SearchBar.module.css';
import searchIcon from '../../assets/search.png'

const SearchBar = (props) => {
    return(
        <div className={SearchBarStyle.searchBar}>
            <form action="" className={SearchBarStyle.searchForm}>
                <input type= "text" placeholder='Search...'></input>
                <button type = "submit"><img src={searchIcon}></img></button>
            </form>
        </div>
    );
};

export default SearchBar;