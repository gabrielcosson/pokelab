import TypeContainerStyle from './TypeContainer.module.css';
import Types from '../../../types.json';


const TypeContainer = (props) => {
    return(
        <div className={TypeContainerStyle.typeContainer}>
            <img className={TypeContainerStyle.typeImage} src={Types[props.type].image}></img>
            <h1 className={TypeContainerStyle.type} style={{color: Types[props.type].color}}>
                {props.typeInLanguage}
            </h1>
        </div>
    );
};

export default TypeContainer;