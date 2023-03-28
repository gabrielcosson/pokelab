import BurgerMenuStyle from './BurgerMenu.module.css';
import communityImage from '../../assets/community.png';
import fightImage from '../../assets/fight.png';
import pokedexImage from '../../assets/pokedex.png';
import pokeballImage from '../../assets/pokeball2.png';
import userImage from '../../assets/user.png';
import arrow from '../../assets/arrow.png';
import pokeball from '../../assets/pokeball.png';
import log from '../../assets/log.png'
import { Link } from 'react-router-dom';


const BurgerMenu = (props) => {
    return(
        <div className={BurgerMenuStyle.container}>

            <div className={BurgerMenuStyle.userImageContainer}>
                <img className={BurgerMenuStyle.userImage} src={userImage}></img>
            </div>

            <h1 className={BurgerMenuStyle.userName}>Gabriel Nieves</h1>

            <div className={BurgerMenuStyle.roleContainer}>
                <img className={BurgerMenuStyle.arrowBeginning} src={arrow}></img>
                <div className={BurgerMenuStyle.role}>
                    <img className={BurgerMenuStyle} src={pokeball}></img>
                    <h1 className={BurgerMenuStyle.userName}>TRAINER</h1>
                </div>
                <img className={BurgerMenuStyle.arrowEnd} src={arrow}></img>
            </div>

            <div className={BurgerMenuStyle.option}>
                <div className={BurgerMenuStyle.imageContainer}>
                    <img className={BurgerMenuStyle.image} src={communityImage}></img>
                </div>
                <div className={BurgerMenuStyle.textContainer}>
                    <h1>Community</h1>
                </div>
            </div>

            <div className={BurgerMenuStyle.option}>
                <div className={BurgerMenuStyle.imageContainer}>
                    <img className={BurgerMenuStyle.image} src={pokeballImage}></img>
                </div>
                <div className={BurgerMenuStyle.textContainer}>
                    <h1>My Pokemons</h1>
                </div>
            </div>

            <div className={BurgerMenuStyle.option}>
                <div className={BurgerMenuStyle.imageContainer}>
                    <img className={BurgerMenuStyle.image} src={pokedexImage}></img>
                </div>
                <div className={BurgerMenuStyle.textContainer}>
                    <h1>Pokedex</h1>
                </div>
            </div>

            <div className={BurgerMenuStyle.option}>
                <div className={BurgerMenuStyle.imageContainer}>
                    <img className={BurgerMenuStyle.image} src={fightImage}></img>
                </div>
                <div className={BurgerMenuStyle.textContainer}>
                    <h1>Fights</h1>
                </div>
            </div>

            <div className={BurgerMenuStyle.outContainer}>
                <img src={log}></img>
                <Link to = "/logIn"><h1>Log Out</h1></Link>
            </div>




            
        </div>
    );
};

export default BurgerMenu;