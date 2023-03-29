import { useContext } from 'react';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { BurgerMenuContext } from '../context/burgerMenuContext';
import DetailsContainer from '../detailsContainer/DetailsContainer';
import LanguageOptions from '../languageOptions/LanguageOptions';
import DetailsStructureStyle from './DetailsStructure.module.css';


const DetailsStructure = (props) => {
    const { widthBurgerMenu, widthList } = useContext(BurgerMenuContext);
    return(
        <>
            
            <div className={DetailsStructureStyle.allContainer}>
                <div className={DetailsStructureStyle.burgerMenu} style={widthBurgerMenu}>
                    <BurgerMenu></BurgerMenu>
                </div>
                    <div className={DetailsStructureStyle.details} style={widthList}>
                        <div className={DetailsStructureStyle.detailsHeader}>
                        <div className={DetailsStructureStyle.titleContainer}>
                            <h1 className={DetailsStructureStyle.title}>Pokedex</h1>
                        </div>
                        <div className={DetailsStructureStyle.languageContainer}>
                            <LanguageOptions pokemonName = {props.data.name}></LanguageOptions>
                        </div>
                    </div>
                    <DetailsContainer data = {props.data} dataEvolution = {props.dataEvolution}></DetailsContainer>
                </div>
            </div>
        </>
    );
};

export default DetailsStructure;