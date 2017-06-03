import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Players } from './../api/players.js';

// components----
import Form from './Form';
import Player from './Players';

const App = () => {
  return (
    <div>
      <Player />
      <Form />
    </div>
  );

}

export default App;