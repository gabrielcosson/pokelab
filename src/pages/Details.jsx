import DetailsStructure from '../components/detailsStructure/DetailsStructure';
import useFetchGet from "../hooks/useFetchGet";
import Spinner from '../components/spinner/Spinner';
import InHeader from '../components/inHeader/InHeader';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BurgerMenuContext } from '../components/context/burgerMenuContext';


const Details = ()=>{

  const {globalUser } = useContext(BurgerMenuContext);
  const {language, pokemon} = useParams();

  const { data, isLoadin, hasError } = useFetchGet(
    `http://localhost:8080/pokedex/${language}/pokemon?value=${pokemon}`
  );

  const {data: dataEvolution, isLoadin: isLoadinEvolution, hasError: hasErrorEvolution } = useFetchGet(
    `http://localhost:8080/pokedex/${language}/pokemon/evolution-chain?name=${pokemon}`
  );

  return (
    <>
      <InHeader username={globalUser.username}></InHeader>
      {isLoadin === true && isLoadinEvolution === true && <Spinner></Spinner>}
      {isLoadin === false && isLoadinEvolution === false && <DetailsStructure data = {data} dataEvolution = {dataEvolution}></DetailsStructure>}
    </>
  );
}

export default Details;