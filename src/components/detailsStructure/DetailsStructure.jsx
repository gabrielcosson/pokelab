import { useContext } from 'react';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { AppContext } from '../appContext/AppContext';
import DetailsContainer from '../detailsContainer/DetailsContainer';
import LanguageOptions from '../languageOptions/LanguageOptions';
import DetailsStructureStyle from './DetailsStructure.module.css';
import backButton from '../../assets/backButton.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useFetchGet from '../../hooks/useFetchGet';
import Spinner from '../spinner/Spinner';
import InHeader from '../inHeader/InHeader';


const DetailsStructure = (props) => {
    const { widthBurgerMenu, widthList, globalUser } = useContext(AppContext);
    const {language, pokemon} = useParams();
    const location = useLocation()
    const { from, page } = location.state

    const { data, isLoadin, hasError } = useFetchGet(
        `http://localhost:8080/pokedex/${language}/pokemon?value=${pokemon}`
    );

    const {data: dataEvolution, isLoadin: isLoadinEvolution, hasError: hasErrorEvolution } = useFetchGet(
        `http://localhost:8080/pokedex/${language}/pokemon/evolution-chain?name=${pokemon}`
    );

    return(
        <>
            <InHeader username={globalUser.username}></InHeader>
            <div className={DetailsStructureStyle.allContainer}>
                <div className={DetailsStructureStyle.burgerMenu} style={widthBurgerMenu}>
                    <BurgerMenu language = {language} userName={globalUser.name} userRole={globalUser.role}></BurgerMenu>
                </div>
                <div className={DetailsStructureStyle.details} style={widthList}>
                    <div className={DetailsStructureStyle.detailsHeader}>
                        <Link to={from} state={{ from: from, pageConsistent: page }}><img className={DetailsStructureStyle.back} src={backButton}></img></Link>
                        <div className={DetailsStructureStyle.titleContainer}>
                            <h1 className={DetailsStructureStyle.title}>Pokedex</h1>
                        </div>
                        <div className={DetailsStructureStyle.languageContainer}>
                            <LanguageOptions from = {from} pageConsistent= {page} pokemonName = {pokemon}></LanguageOptions>
                        </div>
                    </div>
                    {isLoadin === true && isLoadinEvolution === true && <Spinner></Spinner>}
                    {isLoadin === false && isLoadinEvolution === false && <DetailsContainer data = {data} dataEvolution = {dataEvolution}></DetailsContainer>}
                </div>
            </div>
        </>
    );
};

//                            


export default DetailsStructure;