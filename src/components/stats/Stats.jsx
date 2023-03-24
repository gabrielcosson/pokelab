import StatValue from '../statValue/StatValue';
import StatsStyle from './Stats.module.css';

const Stats = (props) => {
    return(
      <>
        <h2 className={StatsStyle.statsTitle}>Stats</h2>
        <div className={StatsStyle.individualStat}>
            <StatValue name= "Health" value = {props.details.stats.health}></StatValue>
        </div>

        <div className={StatsStyle.individualStat}>
            <StatValue name= "Attack" value = {props.details.stats.attack}></StatValue>
        </div>

        <div className={StatsStyle.individualStat}>
            <StatValue name= "Defense" value = {props.details.stats.defense}></StatValue>
        </div>

        <div className={StatsStyle.individualStat}>
            <StatValue name= "Special Attack" value = {props.details.stats.specialAttack}></StatValue>
        </div>

        <div className={StatsStyle.individualStat}>
            <StatValue name= "Special Defense" value = {props.details.stats.specialDefense}></StatValue>
        </div>

        <div className={StatsStyle.individualStat}>
            <StatValue name= "Speed" value = {props.details.stats.speed}></StatValue>
        </div></>
    );
};

export default Stats;