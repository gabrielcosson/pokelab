import SkillsStyle from './Skills.module.css';
import React from 'react';

const Skills = (props) => {
    return (
      <div className={SkillsStyle.skillsContainer}>
        <h2 className={SkillsStyle.skillsTitle}>Skills</h2>
        {Object.values(props.data.abilities).map((skill, index) => (
          <React.Fragment key={index}>
            <h3 className={SkillsStyle.skillName}>
              {skill.name}
            </h3>
            <h3 className={SkillsStyle.skillDescription}>
              {skill.description}
            </h3>
          </React.Fragment>
        ))}
      </div>
    );
};

export default Skills;