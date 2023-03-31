import PaginationStyle from './PaginationCaptures.module.css';

const PaginationCaptures = (props) => {
    return(
        <div className={PaginationStyle.paginationContainer}>
            <button
            className={PaginationStyle.button}
            onClick={() => props.setPageOffset(props.pageOffset - 12)}
            disabled={props.pageOffset == 0 ? true : false}
            >
            Previous
            </button>

            <button
            className={PaginationStyle.button}
            onClick={() => props.setPageOffset(props.pageOffset + 12)}
            disabled={props.disabled==true ? true : false}
            >
            Next
            </button>
        </div>
    );
};

export default PaginationCaptures;