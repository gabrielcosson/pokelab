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

    return (
      <div className={StatValueStyle.wrapped}>
        <h3 className={StatValueStyle.statName}>{props.name}</h3>
        <div className={StatValueStyle.valueContainer}>
          {filledCircles.map((filledCircle, index) => (
            <div className={StatValueStyle.filled} key={index}></div>
          ))}
          {emptyCircles.map((emptyCircle,index) => (
            <div className={StatValueStyle.empty} key={index}></div>
          ))}
          <h1 className={StatValueStyle.value}>{props.value}</h1>
        </div>
      </div>
    );
};

export default StatValue;