import DetailsContainerStyle from "./DetailsContainer.module.css";
import Description from "../description/Description";
import Stats from "../stats/Stats";
import Skills from "../skills/Skills";
import Evolution from "../evolution/Evolution";
import TypeContainer from "../typeContainer/TypeContainer";

const DetailsContainer = (props) => {
  //<TypeContainer key = {type.replace(/\s/g, "")} type = {type.replace(/\s/g, "")} typeInLanguage = {props.data.}></TypeContainer>
  return (
    <div className={DetailsContainerStyle.container}>
      <div className={DetailsContainerStyle.nameTypeContainer}>
        <div className={DetailsContainerStyle.nameContainer}>
          <h1 className={DetailsContainerStyle.name}>
            {props.data.name.charAt(0).toUpperCase() +
              props.data.name.substr(1).toLowerCase()}
          </h1>
        </div>
        <div className={DetailsContainerStyle.typeContainer}>
          {props.data.type.map((type, index) => (
            <TypeContainer
              key={index}
              type={props.data.type[index].replace(/\s/g, "")}
              typeInLanguage={props.data.typesInLanguage[index]}
            ></TypeContainer>
          ))}
        </div>
      </div>

      <div className={DetailsContainerStyle.detailsContainer}>
        <div className={DetailsContainerStyle.firstColumn}>
          <div className={DetailsContainerStyle.imageContainer}>
            <img
              className={DetailsContainerStyle.image}
              src={props.data.img_path}
            ></img>
          </div>
          <Description data={props.data}></Description>
        </div>

        <div className={DetailsContainerStyle.secondColumn}>
          <Stats data={props.data}></Stats>
        </div>

        <div className={DetailsContainerStyle.thirdColumn}>
          <Skills data={props.data}></Skills>
          <Evolution
            data={props.data}
            dataEvolution={props.dataEvolution}
          ></Evolution>
        </div>
      </div>
    </div>
  );
};

export default DetailsContainer;
