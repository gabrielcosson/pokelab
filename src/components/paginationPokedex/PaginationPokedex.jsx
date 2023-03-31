import PaginationStyle from './PaginationPokedex.module.css';

const PaginationPokedex = (props) => {
    return(
        <div className={PaginationStyle.paginationContainer}>
            <button
            className={PaginationStyle.button}
            onClick={() => props.changePage(props.page-1)}
            disabled={props.pageOffset == 0 || props.foundPokemon !="" ? true : false}
            >
            Previous
            </button>
            
            <div className={PaginationStyle.pageFinder}>
            <input className={PaginationStyle.pageFinderInput} type="number" value={props.page} onChange={props.onPageChange}></input>
            <button className={PaginationStyle.pageFinderButton} onClick={()=>props.changePage(props.page)} disabled={props.foundPokemon !="" ? true : false}>Go</button>
            </div>
              
            <button
                className={PaginationStyle.button}
                onClick={() => props.changePage(props.page+1)}
                disabled={props.pageOffset == 636 || props.foundPokemon !="" ? true : false}
            >
            Next
            </button>
        </div>
    );
};

export default PaginationPokedex;