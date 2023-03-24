import TypeCardStyle from './TypeCard.module.css';


const TypeCard = (props) => {
    return (
        <div className={TypeCardStyle.typeContainer}>
            <h2 className={TypeCardStyle.type}>{props.type.charAt(0).toUpperCase()+props.type.substr(1).toLowerCase()}</h2>
        </div>
    );
};

export default TypeCard;