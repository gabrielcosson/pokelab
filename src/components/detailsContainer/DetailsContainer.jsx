import DetailsContainerStyle from "./DetailsContainer.module.css";
import Description from "../description/Description";
import Stats from "../stats/Stats";
import Skills from "../skills/Skills";
import Evolution from "../evolution/Evolution";
import TypeContainer from "../typeContainer/TypeContainer";

const DetailsContainer = (props) => {
    return (
    <div className={DetailsContainerStyle.container}>
      <div className={DetailsContainerStyle.nameTypeContainer}>
        <div className={DetailsContainerStyle.nameContainer}>
          <h1 className={DetailsContainerStyle.name}>
            {props.data.results[0].name.charAt(0).toUpperCase() +
              props.data.results[0].name.substr(1).toLowerCase()}
          </h1>
          <h1 className={DetailsContainerStyle.id}>No. {props.data.results[0].id}</h1>
        </div>
        <div className={DetailsContainerStyle.typeContainer}>
          {props.data.results[0].types.map((type, index) => (
            <TypeContainer
              key={index}
              type={props.data.results[0].types[index].replace(/\s/g, "")}
              typeInLanguage={props.data.results[0].typesInLanguage[index]}
            ></TypeContainer>
          ))}
        </div>
      </div>

      <div className={DetailsContainerStyle.detailsContainer}>
        <div className={DetailsContainerStyle.firstColumn}>
          <div className={DetailsContainerStyle.imageContainer}>
            <img
              className={DetailsContainerStyle.image}
              src={props.data.results[0].img_path}
            ></img>
          </div>
          <Description data={props.data.results[0]}></Description>
        </div>

        <div className={DetailsContainerStyle.secondColumn}>
          <Stats data={props.data.results[0]}></Stats>
        </div>

        <div className={DetailsContainerStyle.thirdColumn}>
          <Skills data={props.data.results[0]}></Skills>
          <Evolution
            data={props.data.results[0]}
            dataEvolution={props.dataEvolution}
          ></Evolution>
        </div>
      </div>
    </div>
  );
};

export default DetailsContainer;
