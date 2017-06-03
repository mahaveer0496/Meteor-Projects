import React from 'react';
import { Players } from './../api/players.js';

const Form = () => {
  let name = null;
  const submitHandler = (event) => {
    event.preventDefault();
    if (name) {
      Players.insert({
        name: name.value,
        score: 0,
      });
      name.value = '';
    }
  }
  return (
    <div>
      <form className="form" onSubmit={submitHandler} >
        <input className="form__input" type="text" name="player" ref={player => { name = player }} placeholder="Add Player"/>
        <input className="form__button" type="submit" />
      </form>
    </div>
  );
};

export default Form;