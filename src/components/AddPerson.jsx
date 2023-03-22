import React, { useState } from "react";

export const AddPerson = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    // el event.target.value es el valor actual que la persona esta digitando
    setInputValue(target.value);
    console.log(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // trim borra los espacios de izquierda y derecha y valida que no se envie un string vacio en el form
    if (inputValue.trim().length <= 1) return;
    //categories ya que va al use state the gitExpert app y categories es el primer valor por lo que nos da la lista anterior
    /* setCategories((categories) => [inputValue, ...categories]); */
    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    // Tener muy encuenta que por default el form tiene por defecto refrescar la pagina
    <form onSubmit={(event) => onSubmit(event)}>
      {/* El onchange es para hacer el use State de manera corrent */}
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
