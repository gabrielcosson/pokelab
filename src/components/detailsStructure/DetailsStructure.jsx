import DetailsContainer from '../detailsContainer/DetailsContainer';
import InHeader from '../inHeader/InHeader';
import LanguageOptions from '../languageOptions/LanguageOptions';
import DetailsStructureStyle from './DetailsStructure.module.css';


const DetailsStructure = (props) => {
    return(
        <>
            <InHeader></InHeader>
            <div className={DetailsStructureStyle.detailsHeader}>
                <div className={DetailsStructureStyle.titleContainer}>
                    <h1 className={DetailsStructureStyle.title}> Pokedex</h1>
                </div>
                <div className={DetailsStructureStyle.languageContainer}>
                    <LanguageOptions></LanguageOptions>
                </div>
            </div>
            <DetailsContainer></DetailsContainer>

        </>
    );
};

export default DetailsStructure;