import React, { useState } from "react";
import { ExampleRelationShip } from "../ExampleRelationShip";
import { AddPerson } from "./AddPerson";

export const NumberOfCalls = () => {
  const [counter, setCounter] = useState(0);
  const [person, setPerson] = useState("");

  return (
    <>
      <h1> Number of calls </h1>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+1</button>

      <AddPerson onNewCategory={setPerson} />
      <h1>{person}</h1>
      <ExampleRelationShip key={person} value ={person} />
    </>
  );
};
