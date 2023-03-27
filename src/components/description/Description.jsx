import DescriptionStyle from './Description.module.css';


const Description = (props) => {
    return(
        <div className={DescriptionStyle.descriptionContainer}>
            <h2 className={DescriptionStyle.descriptionTitle}>Description</h2>
            <h3 className={DescriptionStyle.description}>{props.data.description}</h3>
        </div>
    );
};

export default Description;