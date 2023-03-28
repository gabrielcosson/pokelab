import InHeader from "../components/inHeader/InHeader";
import HomeStructure from "../components/homeStructure/HomeStructure";
import useFetchGet from "../hooks/useFetchGet";
import { useEffect, useState } from "react";



const Home = () => {

  return (
    <>
      <InHeader></InHeader>
      <HomeStructure></HomeStructure>
    </>
  );
};

export default Home;