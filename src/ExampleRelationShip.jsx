import { useState, useEffect } from "react";
import { getPokemons } from "./components/getPokemons";

import { getUser } from "./components/getUser";

const baseURL = "http://localhost:8080/pokedex/auth/signUp";

export const ExampleRelationShip = ({ person }) => {

  useEffect(() =>{
    getUser(
      "andres",
      "pico",
      "andresTest2@endava.com",
      "andresTest2",
      "holascsa"
    ).then(result => console.log(result)).catch(error => console.error('Esto es un error ' + error.status));
  },[])
  useEffect(() => {
    getPokemons("oak", "", "");
  }, []);

  return (
    <>
      <h1> Example Relationship</h1>
      <h2>{person}</h2>
      {/* {login(
        "Gabriel",
        "Nieves",
        "juansdaasd4214@endava.com",
        "Testing123DSAD",
        "123"
      )} */}
    </>
  );
};
