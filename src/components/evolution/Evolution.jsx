import EvolutionStyle from './Evolution.module.css';

const Evolution = (props) => {
    return(
        <div className={EvolutionStyle.evolutionContainer}>
            <h2 className={EvolutionStyle.evolutionTitle}>Evolution Chain</h2>
            <h5 className={EvolutionStyle.info}>{props.data.name.charAt(0).toUpperCase()+props.data.name.substr(1).toLowerCase()} could evolve into...</h5>
            {Object.values(props.dataEvolution.next_evolution).map(evolution=>
                <div key= {evolution.name} className={EvolutionStyle.individualEvolution}>
                    <img className={EvolutionStyle.evolutionImage} src={evolution.img_url}></img>
                    <h3 className={EvolutionStyle.evolutionName}>{evolution.name.charAt(0).toUpperCase()+evolution.name.substr(1).toLowerCase()}</h3> 
                </div>
                )}
        </div>
    );
};

export default Evolution;