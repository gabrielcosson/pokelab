import React from 'react'

const Fetch = async () => {
    const responses = await fetch("http://localhost:8080/pokedex/pokemon-trainer/andres/pokemon?quantity=5&offset=0", 
    {
        method: "GET", 
        headers: new Headers({"connected": "oak", "sortBy": "", "filterByType":""}),
        mode: 'no-cors',
    })

    const api = await fetch("https://pokeapi.co/api/v2/pokemon/jigglypuff", 
    {
        method: "GET", 
    })

    console.log(api.json());

  return (
    <div>
      <h1>Fetch</h1>
    </div>
  );
};

export default Fetch;
