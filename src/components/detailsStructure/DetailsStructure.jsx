import DetailsContainer from '../detailsContainer/DetailsContainer';
import LanguageOptions from '../languageOptions/LanguageOptions';
import DetailsStructureStyle from './DetailsStructure.module.css';


const DetailsStructure = (props) => {
    return(
        <>
            <div className={DetailsStructureStyle.detailsHeader}>
                <div className={DetailsStructureStyle.titleContainer}>
                    <h1 className={DetailsStructureStyle.title}>Pokedex</h1>
                </div>
                <div className={DetailsStructureStyle.languageContainer}>
                    <LanguageOptions></LanguageOptions>
                </div>
            </div>
            <DetailsContainer data = {props.data} dataEvolution = {props.dataEvolution}></DetailsContainer>
        </>
    );
};

export default DetailsStructure;