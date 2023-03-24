import React from "react";

export const Fetch = async () => {
  const url = `http://localhost:8080/pokedex/auth/signUp`;
  const login = async (name, lastname, email, username, password) => {
    const header = { "Content-Type": "application/json" };
    const body = { name, lastname, email, username, password };
    const resp = await fetch({ method: "POST" }, url, body, header);
    console.log(resp.json());
  };
  return (
    <>
      <h1>{login("Gabriel", "Nieves", "juansdaasd@endava.com", "Testing123", "123")}</h1>
    </>
  );
};
