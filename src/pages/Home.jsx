import HomeStructure from "../components/homeStructure/HomeStructure";
import useFetchGet from "../hooks/useFetchGet";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



const Home = () => {
  const { state } = useLocation();

  return (
    <>
      <HomeStructure userInfo = {state.data}></HomeStructure>
    </>
  );
};

export default Home;