import EvolutionStyle from './Evolution.module.css';


const Evolution = (props) => {
    return(
        <div className={EvolutionStyle.evolutionContainer}>
            <h2 className={EvolutionStyle.evolutionTitle}>Evolution Chain</h2>
            <h5 className={EvolutionStyle.info}>{props.details.name} could evolve into...</h5>
            {Object.values(props.details.evolution).map(evolution=> 
            <>
                <div className={EvolutionStyle.individualEvolution}>
                    <img className={EvolutionStyle.evolutionImage} src={evolution.image}></img>
                    <h3 className={EvolutionStyle.evolutionName}>{evolution.name}</h3> 
                </div>
            </>)}
        </div>
    );
};

export default Evolution;