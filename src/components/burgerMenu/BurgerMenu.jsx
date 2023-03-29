import BurgerMenuStyle from './BurgerMenu.module.css';
import communityImage from '../../assets/community.png';
import fightImage from '../../assets/fight.png';
import pokedexImage from '../../assets/pokedex.png';
import pokeballImage from '../../assets/pokeball2.png';
import userImage from '../../assets/user.png';
import arrow from '../../assets/arrow.png';
import pokeball from '../../assets/pokeball.png';
import log from '../../assets/log.png'
import { useContext, useEffect, useState } from 'react';
import { BurgerMenuContext } from '../context/burgerMenuContext';
import useFetchPut from '../../hooks/useFetchPut';
import { Link, useNavigate } from 'react-router-dom';


const BurgerMenu = (props) => {
    const { widthBurgerMenu, widthList, globalUser } = useContext(BurgerMenuContext);
    const { putFetch, data, isLoading, hasError } = useFetchPut();
    const [loggedOut, setLoggedOut] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (hasError !== null) {
            return;
        }
        if (data?.status) {
            setLoggedOut(true);
        }
    }, [data]);

    const logOut = async () => {
        const logOutUser = {
            "email": globalUser.email,
            "password": globalUser.password
        }
        await putFetch("http://localhost:8080/pokedex/auth/logOut", logOutUser, "");
    };

    if(loggedOut){
        navigate("/logIn")
    }

    const myPokemons = ()=>{
        navigate(`/captures/${props.language}`)
    }

    const home = ()=>{
        navigate(`/home/${props.language}`)
    }

    return(
        <div className={BurgerMenuStyle.container}>

            <div className={BurgerMenuStyle.userImageContainer}>
                <img className={BurgerMenuStyle.userImage} src={userImage}></img>
            </div>

            <h1 className={BurgerMenuStyle.userName}>{props.userName}</h1>

            <div className={BurgerMenuStyle.roleContainer}>
                <img className={BurgerMenuStyle.arrowBeginning} src={arrow}></img>
                <div className={BurgerMenuStyle.role}>
                    <img className={BurgerMenuStyle} src={pokeball}></img>
                    <h1 className={BurgerMenuStyle.userName}>{props.userRole}</h1>
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
                <div className={BurgerMenuStyle.textContainer} onClick={myPokemons}>
                    <h1>My Pokemons</h1>
                </div>
            </div>

            <div className={BurgerMenuStyle.option}>
                <div className={BurgerMenuStyle.imageContainer}>
                    <img className={BurgerMenuStyle.image} src={pokedexImage}></img>
                </div>
                <div className={BurgerMenuStyle.textContainer} onClick={home}>
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

            <button className={BurgerMenuStyle.outContainer} onClick={logOut}>
                <img src={log}></img>
                <h1 className={BurgerMenuStyle.logOut}>Log Out</h1>
            </button>
        </div>
    );
};

export default BurgerMenu;