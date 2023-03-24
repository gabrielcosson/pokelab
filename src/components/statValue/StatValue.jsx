import StatValueStyle from './StatValue.module.css';


const StatValue = (props) => {
    let circlesToFill = Math.floor(props.value/10)
    let emptyCircles = [];
    let filledCircles = [];

    for (let i = 1; i <= circlesToFill; i++) {
        filledCircles.push("");
    }

    for (let i = circlesToFill+1; i <= 10; i++){
        emptyCircles.push("");
    }

    console.log(emptyCircles);
    console.log(filledCircles);

    return(
        <>
        <h3 className={StatValueStyle.statName}>{props.name}</h3> 
        <div className={StatValueStyle.valueContainer}>
            {filledCircles.map(filledCircle => <div className={StatValueStyle.filled}></div>)}
            {emptyCircles.map(emptyCircle => <div className={StatValueStyle.empty}></div>)}
            <h1 className={StatValueStyle.value}>{props.value}</h1>    
        </div>
        </>
    );
};

export default StatValue;

//{circles.map(circle => <h1>{filledCircles}</h1>)}