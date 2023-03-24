import DetailsContainerStyle from './DetailsContainer.module.css';
import Details from '../../../details.json';
import Description from '../description/Description';
import Stats from '../stats/Stats';
import Skills from '../skills/Skills';
import Evolution from '../evolution/Evolution'; 
import TypeContainer from '../typeContainer/TypeContainer';

const DetailsContainer = (props) => {
    return(
        <div className={DetailsContainerStyle.container}>
            <div className={DetailsContainerStyle.nameTypeContainer}>
                <div className={DetailsContainerStyle.nameContainer}>
                    <h1 className={DetailsContainerStyle.name}>{Details.name}</h1>
                </div>
                <div className={DetailsContainerStyle.typeContainer}>
                    {(Details.types).map(type => <TypeContainer type = {type}></TypeContainer>)}
                </div>
            </div>

            <div className={DetailsContainerStyle.detailsContainer}>
                <div className={DetailsContainerStyle.firstColumn}>
                    <div className={DetailsContainerStyle.imageContainer}>
                        <img className={DetailsContainerStyle.image} src={Details.image}></img>
                    </div>
                    <Description details = {Details}></Description>
                </div>

                <div className={DetailsContainerStyle.secondColumn}>
                    <Stats details = {Details}></Stats>
                </div>

                <div className={DetailsContainerStyle.thirdColumn}>
                    <Skills details = {Details}></Skills>
                    <Evolution details = {Details}></Evolution>
                </div>
            </div>

        </div>
    );
};

export default DetailsContainer;