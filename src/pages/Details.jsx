import DetailsStructure from '../components/detailsStructure/DetailsStructure';
import useFetchGet from "../hooks/useFetchGet";
import Spinner from '../components/spinner/Spinner';
import InHeader from '../components/inHeader/InHeader';
import { useParams } from 'react-router-dom';


const Details = ()=>{

  const {language, pokemon} = useParams();

  const { data, isLoadin, hasError } = useFetchGet(
    `http://localhost:8080/pokedex/${language}/pokemon?value=${pokemon}`
  );

  const {data: dataEvolution, isLoadin: isLoadinEvolution, hasError: hasErrorEvolution } = useFetchGet(
    `http://localhost:8080/pokedex/${language}/pokemon/evolution-chain?name=${pokemon}`
  );

  console.log(dataEvolution)

  return (
    <>
      <InHeader></InHeader>
      {isLoadin === true && isLoadinEvolution === true && <Spinner></Spinner>}
      {isLoadin === false && isLoadinEvolution === false && <DetailsStructure data = {data} dataEvolution = {dataEvolution}></DetailsStructure>}
    </>
  );
}

export default Details;