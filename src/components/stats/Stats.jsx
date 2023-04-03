import StatValue from '../statValue/StatValue';
import StatsStyle from './Stats.module.css';

const Stats = (props) => {
    return(
      <>
        <h2 className={StatsStyle.statsTitle}>Stats</h2>
        <div className={StatsStyle.individualStat}>
            <StatValue name= "Health" value = {props.data.stats.health}></StatValue>
        </div>

        <div className={StatsStyle.individualStat}>
            <StatValue name= "Attack" value = {props.data.stats.attack}></StatValue>
        </div>

        <div className={StatsStyle.individualStat}>
            <StatValue name= "Defense" value = {props.data.stats.defense}></StatValue>
        </div>

        <div className={StatsStyle.individualStat}>
            <StatValue name= "Special Attack" value = {props.data.stats.specialAttack}></StatValue>
        </div>

        <div className={StatsStyle.individualStat}>
            <StatValue name= "Special Defense" value = {props.data.stats.specialDefense}></StatValue>
        </div>

        <div className={StatsStyle.individualStat}>
            <StatValue name= "Speed" value = {props.data.stats.speed}></StatValue>
        </div></>
    );
};

export default Stats;