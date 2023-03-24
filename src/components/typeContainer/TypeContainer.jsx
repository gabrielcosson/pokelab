import TypeContainerStyle from './TypeContainer.module.css';
import Types from '../../../types.json';


const TypeContainer = (props) => {
    return(
        <>
            <img className={TypeContainerStyle.typeImage} src={Types[props.type].image}></img>
            <h1 className={TypeContainerStyle.type} style={{color: Types[props.type].color}}>
                {props.type.charAt(0).toUpperCase() + props.type.substr(1).toLowerCase()}
            </h1>
        </>
    );
};

export default TypeContainer;