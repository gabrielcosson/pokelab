import SearchPaginationStyle from './SearchPagination.module.css';
import SearchBar from '../searchBar/SearchBar';
import Pagination from '../pagination/Pagination';

const SearchPagination = (props) => {
    return(
        <div className={SearchPaginationStyle.container}>
            <div className={SearchPaginationStyle.searchBar}>
                <SearchBar></SearchBar>
            </div>
            <Pagination></Pagination>            
        </div>
    );
};

export default SearchPagination;