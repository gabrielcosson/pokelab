import PaginationStyle from './Pagination.module.css';
import forwardImage from '../../assets/forward.png'
import backImage from '../../assets/back.png'



const Pagination = (props) => {
    return(
        <div className={PaginationStyle.container}>
            <img className={PaginationStyle.icon} src={backImage}></img>
            <h6 className={PaginationStyle.current}>1</h6>
            <h6 className={PaginationStyle.number}>2</h6>
            <h6 className={PaginationStyle.number}>3</h6>
            <img className={PaginationStyle.icon} src={forwardImage}></img>
        </div> 
    );
};

export default Pagination;