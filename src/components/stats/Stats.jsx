import StatsStyle from './Stats.module.css';

const Stats = (props) => {
    return(
      <>
        <h2 className={StatsStyle.statsTitle}>Stats</h2>
        <div className={StatsStyle.individualStat}>
            <h3 className={StatsStyle.statName}>Health</h3> 
            <h3 className={StatsStyle.statValue}>{props.details.stats.health}</h3> 
        </div>

        <div className={StatsStyle.individualStat}>
            <h3 className={StatsStyle.statName}>Attack</h3> 
            <h3 className={StatsStyle.statValue}>{props.details.stats.attack}</h3> 
        </div>

        <div className={StatsStyle.individualStat}>
            <h3 className={StatsStyle.statName}>Defense</h3> 
            <h3 className={StatsStyle.statValue}>{props.details.stats.defense}</h3> 
        </div>

        <div className={StatsStyle.individualStat}>
            <h3 className={StatsStyle.statName}>Special Attack</h3> 
            <h3 className={StatsStyle.statValue}>{props.details.stats.specialAttack}</h3> 
        </div>

        <div className={StatsStyle.individualStat}>
            <h3 className={StatsStyle.statName}>Special Defense</h3> 
            <h3 className={StatsStyle.statValue}>{props.details.stats.specialDefense}</h3> 
        </div>

        <div className={StatsStyle.individualStat}>
            <h3 className={StatsStyle.statName}>Speed</h3> 
            <h3 className={StatsStyle.statValue}>{props.details.stats.speed}</h3> 
        </div></>
    );
};

export default Stats;