const baseURL = "http://localhost:8080/pokedex/auth/signUp";
import axios from "axios";
const handlingError = (result) => {
  if (result.status === 200) {
    return result.json();
  } else {
    let error = new Error(result.status);
    error.response = result.json(); // This is the problem
    error.status = result.status;
    throw error + ' ACA HAY ERROR';
  }
};
export const getUser = async (name, lastname, email, username, password) => {
  const header = { "Content-Type": "application/json" };
  const data = { name, lastname, email, username, password };
  let provisionalUser;
  const user = await axios
    .post(baseURL, data, header)
    .then((response) => {
      provisionalUser = response.data;
      handlingError(response);
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  console.log("EL USER JSPN ", user);
  console.log("EL OPTIONAL USER JSON ", provisionalUser);
  return user;
  const login = async (name, lastname, email, username, password) => {};
};
