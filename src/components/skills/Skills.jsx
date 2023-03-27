import SkillsStyle from './Skills.module.css';


const Skills = (props) => {
    return(
        <div className={SkillsStyle.skillsContainer}>
            <h2 className={SkillsStyle.skillsTitle}>Skills</h2>
            {Object.values(props.data.abilities).map(skill=> 
            <>
                <h3 className={SkillsStyle.skillName}>{skill.name}</h3> 
                <h3 className={SkillsStyle.skillDescription}>{skill.description}</h3>
            </>)}
        </div>
    );
};

export default Skills;