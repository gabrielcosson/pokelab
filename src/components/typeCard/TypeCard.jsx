import TypeCardStyle from './TypeCard.module.css';


const TypeCard = (props) => {
    return (
        <div className={TypeCardStyle.typeContainer}>
            <h2 className={TypeCardStyle.type}>{props.type}</h2>
        </div>
    );
};

export default TypeCard;