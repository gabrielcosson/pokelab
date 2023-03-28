import TypeContainerStyle from './TypeContainer.module.css';
import Types from '../../../types.json';


const TypeContainer = (props) => {
    return(
        <>
            <img className={TypeContainerStyle.typeImage} src={Types[props.type].image}></img>
            <h1 className={TypeContainerStyle.type} style={{color: Types[props.type].color}}>
                {props.typeInLanguage}
            </h1>
        </>
    );
};

export default TypeContainer;